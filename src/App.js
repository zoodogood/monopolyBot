
import { getClient }      from '#module/client';
import { getDatabase }    from '#module/database';
import { getI18nManager } from '#module/I18nManager';

import importCommands from '#lib/importCommands.js';
import importEvents   from '#lib/importEvents.js';

import StructureApp from '#structure/App';

import EventEmitter from 'events';


class App {
  constructor(config){
    this.config = config;
    this.emitter = new EventEmitter();
  }

  // key: <initFuncion>
  #prepareStructures = {
    client:    getClient,
    database:  getDatabase,
    i18n:      getI18nManager,

    commands:  importCommands,
    events:    importEvents
  }

  async prepare({ clearConsole }){
    this.emitter.emit("prepare-start");

    if (clearConsole)
      console.clear();

    for (const keyword in this.#prepareStructures){
      const getConfig = (keyword) => this.config[keyword];
      const initializeBy = (keyword, config) => this.#prepareStructures[keyword]( config );

      const config = getConfig(keyword);
      try {


        this[keyword] = await initializeBy(keyword, config);

        this.emitter.emit("prepare-load-content", keyword);
      }
      catch (err){

        if (config.required)
          throw err;

        console.info(`Not loaded. "${ keyword }" structure throw warning:`);
        console.error(err);

        this.emitter.emit("prepare-load-warning", err);
      }
    }

    this.emitter.emit("prepare-end");
  }



  async launch(){
    this.emitter.emit("launch-start");

    this.data = await this.database.select(
      new StructureApp()
    );



    this.events.each((event) => event.handle());
    this.client.login(this.config.client.token);

    this.emitter.emit("launch");
  }
}

export default App;
