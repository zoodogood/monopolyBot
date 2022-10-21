import BaseCommand from '#lib/baseCommand.js';

import { exec } from 'child_process';
import EventEmitter from 'events';


class Command extends BaseCommand {
  constructor(){
    super();
  }
  
  async onChatInput(message){
    const receiver = this.createReceiver();
    const out = await receiver.pull();
    message.reply(`\`\`\`-----${ out }\`\`\`\n-----`);
  }

  createReceiver(){
    return new Receiver();
  }

  static data = {
    name: "git-pull",
    description: "Receive changes from github",
    omit: true
  }
}


export { Command };


class Receiver {
  static COMMAND = "git pull";
  static END_COMMAND = "end";

  constructor(){
    this.emitter = new EventEmitter();
  }

  async pull(){
    const promise = this.createPromise();
    exec(
      this.constructor.COMMAND,
      this.createCallback()
    )

    return promise;
  }

  createCallback(){
    return (error, stdout) => this.emitter.emit(this.constructor.END_COMMAND, error, stdout);
  }

  createPromise(){
    return new Promise((resolve, reject) => {
      this.emitter.once(this.constructor.END_COMMAND, (error, stdout) => 
        error ? reject(error) : resolve(stdout)
      );
    });
  }
}