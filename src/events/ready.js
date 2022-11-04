import BaseEvent from '#lib/baseEvent.js';
import Client from '#structure/Client';
import { client, commands, events } from '#core/exports';

class Event extends BaseEvent {
  constructor(){
    super(client, "ready");
  }


  async run(){

    const timeSlice = process.uptime();
    const data = this.constructor.getDisplayData();
    console.info(this.constructor.COLORS.green, `${ "\n".repeat(4) }Launched in ${ (timeSlice * 1000).toFixed(3) }ms:`);

    console.table({bot: data.bot});
    console.info(data.url);

    console.info(this.constructor.COLORS.green, "────────");
    console.info( "\n".repeat(4) );
  }

  static getDisplayData(){

    return {
      bot: {
        id:       Number( client.user.id ),
        guilds:   client.guilds.cache.size,
        commands: commands.collection.size,
        events:   events.collection.size
      },
      url: new Client(client).createInvite()
    }
  }

  static COLORS = {
    green: "\x1b[32m%s\x1b[0m"
  }

  static options = {
    name: "ready"
  }
}

export { Event };

