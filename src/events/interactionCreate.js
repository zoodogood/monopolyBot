import BaseEvent from '@lib/baseEvent';


class Event extends BaseEvent {
  constructor(){
    super(app.client, "interactionCreate");
  }


  async run(interaction){
    console.log(interaction);
  }

  static data = {
    name: "interactionCreate"
  }
}

export { Event };
