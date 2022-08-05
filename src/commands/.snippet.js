/**

*/

import BaseCommand from '@lib/baseCommand';

class Command extends BaseCommand {
  constructor(){
    super();
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
