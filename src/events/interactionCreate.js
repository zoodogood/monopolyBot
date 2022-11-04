import BaseEvent from '#lib/baseEvent.js';
import { client, commands } from '#core/exports';


class Event extends BaseEvent {
  constructor(){
    super(client, "interactionCreate");
  }


  async run(interaction){
    if (interaction.isCommand()){
      executeCommand(interaction);
      return;
    }
  }

  static options = {
    name: "interactionCreate"
  }
}

export { Event };


function executeCommand(interaction){
  const command = commands.get(interaction.commandName);
  command.onSlashInteraction.call(command, interaction);
}