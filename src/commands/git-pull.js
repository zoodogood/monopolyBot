import BaseCommand from '#lib/baseCommand.js';
import { execSync } from 'child_process';

class Command extends BaseCommand {
  constructor(){
    super();
  }
  
  async onChatInput(message){
    const stdout = execSync("git pull");
    message.reply(`\`\`\`\n${ stdout }\`\`\``);
  }

  static data = {
    name: "git-pull",
    description: "Receive changes from github",
    omit: true
  }
}


export { Command };
