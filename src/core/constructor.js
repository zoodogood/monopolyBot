
import { getClient, startClient }                         from './modules/Client/interface.js';
import { getDatabase, launchDatabase }                    from './modules/Database/interface.js';
import { getI18nManager, initializeI18nManager }          from './modules/I18nManager/interface.js';
import { getEventsManager, initializeEventsManager }      from './modules/EventsManager/interface.js';
import { getCommandsManager, initializeCommandsManager }  from './modules/CommandsManager/interface.js';



import EventEmitter from 'events';


class Core {

	constructor(config){
		this.config = config;
    this.emitter = new EventEmitter();
  }

  // key: <initFuncion>
  #prepareStructure = {
    client:    getClient,
    database:  getDatabase,
    i18n:      getI18nManager,

    commands:  getCommandsManager,
    events:    getEventsManager
  }

  async prepare(){
    this.emitter.emit("prepare-start");
    const structure = this.#prepareStructure;

    const getConfig = (keyword) => this.config[keyword];
    const initializeBy = (keyword, config) => structure[keyword]( config );

    for (const keyword in structure){
      const config = getConfig(keyword);
      this[keyword] = await initializeBy(keyword, config);
      this.emitter.emit("prepare-load-content", keyword);
    };

    this.emitter.emit("prepare-end");
  }


  // key: <initFuncion>
  #launchStructure = {
    client:    startClient,
    database:  launchDatabase,
    i18n:      initializeI18nManager,

    commands:  initializeCommandsManager,
    events:    initializeEventsManager
  }

  async start(){
    this.emitter.emit("before-start");
    const structure = this.#launchStructure;
    const getConfig = (keyword) => this.config[keyword];
    const startBy = (keyword, config) => structure[keyword]( this[keyword], config );

    for (const keyword in structure){
      const config = getConfig(keyword);
      try {
        await startBy(keyword, config);
        this.emitter.emit("start-content", keyword);
      } catch (error){
        throw error;
      }
    };
  }
}


export default Core;