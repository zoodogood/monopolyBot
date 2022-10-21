class BaseCommand {
  constructor(){

  }

  get commandOptions(){
    return this.constructor.options;
  }

  static options = {

  }
}

export default BaseCommand;
