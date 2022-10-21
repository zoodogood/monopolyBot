import BaseCommand from '#lib/baseCommand.js';

class Command extends BaseCommand {
  static options = {
    name: "game",
    description: "Launch a game"
  }
}


export { Command };
