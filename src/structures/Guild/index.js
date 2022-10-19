import Util from '#lib/Util/index.js';

class Guild {
  constructor(guildResolable){
    this.id = Util.resolveId(guildResolable);
  }


  get primaryKey(){
    return this.id;
  }

  get type(){
    return "guild";
  }

  transfromToDatabase(){
    const {createdAt, primaryKey} = this;
    return {createdAt, primaryKey};
  }

  transfromFromDatabase(data){
    this.createdAt = data.createdAt;
    return this;
  }
}

export default Guild;
