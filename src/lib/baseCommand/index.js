class BaseCommand {
  constructor(){

  }

  get commandData(){
    return this.constructor.data;
  }

  static data = {

  }
}

export default BaseCommand;
