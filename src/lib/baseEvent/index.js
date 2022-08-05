class BaseEvent {
  #callback;
  #eventTarget;
  #eventName;

  constructor(target, eventName, options = {}){

    this.eventTarget = target;
    this.eventName   = eventName;
    this.callback    = this.#beforeRun.bind(this);

    this.isListeningNow = false;
    this.options = options;
  }

  handle(){

    if (this.isListeningNow === true){
      throw new Error("Listening now");
    }

    const callback  = this.callback;
    const eventName = this.eventName;
    const target    = this.eventTarget;


    target.on(eventName, callback);
    this.isListeningNow = true;
  }

  freeze(){
    this.isListeningNow = false;
    target.removeListener(callback, eventName);
  }

  #beforeRun(...args){

    if (this.checkCondition?.(...args) === false)
      return;

    this.run(...args);
  }

  get eventData(){
    return this.constructor.data;
  }
}

export default BaseEvent;
