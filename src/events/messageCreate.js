import BaseEvent from '#lib/baseEvent.js';

import { client, commands } from '#core/exports';

class Event extends BaseEvent {
  constructor(){
    super(client, "messageCreate");
  }


  async run(message){
    const info = CommandHandler.parseMessage(message);
    if (info !== null){
      const command = info.command;
      CommandHandler.executeCommand(command, message);
    }

    
  }

  static options = {
    name: "messageCreate"
  }
}

export { Event };


 

class CommandHandler {
  static executeCommand(command, message){
    command.onChatInput.call(command, message);
  }

  static parseMessage(message){
    if (!message.content){
      return null;
    }

    if (!message.mentions.has(client.user)){
      return null;
    }

    const content = message.content
      .replace(RegExp(`<.{1,2}?${ client.user.id }>`), "")
      .trim();
    
    const commandName = content
      .split(" ").at(0);
    
    const command = commands.collection.get(commandName);
    if (!command){
      return null;
    }
    return { command };
  }
}