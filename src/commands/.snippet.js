/**
  - OnChatInput be call when client is mentioned with command name on chat
*/

import BaseCommand from '@lib/baseCommand';

class Command extends BaseCommand {
  constructor(){
    super();
  }
  
  onChatInput(message){
    
  }

  onSlashInteraction(interaction){
    
  }

  onComponentInteraction(interaction){

  }

  static data = {
    name: "<NAME>",
    description: "<DESCRIPTION>",
    defaultMemberPermissions: 0
  }
}


export { Command };
