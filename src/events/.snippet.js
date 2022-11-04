import BaseEvent from '@lib/baseEvent';


class Event extends BaseEvent {
  constructor(){
    super(client, "ready");
  }


  async run(){

  }

  static options = {
    name: "<NAME>"
  }
}

export { Event };
