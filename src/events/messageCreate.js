import BaseEvent from '#lib/baseEvent.js';

const COMMAND_NAME_REGEX = /[a-zа-я$_ёъ\-]+/ig

class Event extends BaseEvent {
  constructor(){
    super(app.client, "messageCreate");
  }


  async run(message){
    if (!message.content){
      return;
    }

    if (!message.mentions.has(app.client.user)){
      return;
    }

    const match = message.content.matchAll(COMMAND_NAME_REGEX)
      .next()
      .value;

    if (!match){
      return;
    }

    const commandName = match.at(1);
    executeCommand(message, commandName);
  }

  static data = {
    name: "messageCreate"
  }
}

export { Event };


function executeCommand(message, commandName){
  const command = app.commands.get(commandName);

  if (!command){
    return;
  }

  command.onChatInput.call(command, message);
}