import { Collection } from '@discordjs/collection';
//import { Guild } from '@app/structures';

//import { resolveId } from '@lib/util';

class App {
  constructor(){
    this.guilds = new Collection();
  }

  // getGuild(guildResolable){
  //   if (!guildResolable)
  //     throw new Error("guildResolable is null or undefined");
  //
  //   const id = resolveId(guildResolable);
  //   if (this.guilds.has(id)){
  //     return this.guilds.get(id);
  //   }
  //
  //   const guild = new Guild(id);
  //   this.guilds.set(guild.id, guild);
  // }

  get _key(){
    return "main";
  }

  get table(){
    return "App";
  }

  transfromToDatabase(){

    return {createdAt} = this;
  }

  transfromFromDatabase(data){
    this.createdAt = data.createdAt;
    return this;
  }
}

export default App;
