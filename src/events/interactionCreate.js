import BaseEvent from '#lib/baseEvent.js';


class Event extends BaseEvent {
  constructor(){
    super(app.client, "interactionCreate");
  }


  async run(interaction){
    if (interaction.isCommand()){
      executeCommand(interaction);
      return;
    }
  }

  static data = {
    name: "interactionCreate"
  }
}

export { Event };


function executeCommand(interaction){
  const command = app.commands.get(interaction.commandName);
  command.onSlashInteraction.call(command, interaction);
}