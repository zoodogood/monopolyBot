import createClient from './createClient.js';


class Database {

  async connect({host, name}){
    const mongoClient = createClient(host);
    await mongoClient.connect();

    const databaseClient = mongoClient.db(name);
    this.client = databaseClient;
  }


  async update(source){
    this.#validationSource(source);

    const data = source.transfromToDatabase?.() ?? source;

    const table = this.#getTable(source.type);

    return await table.updateOne({primaryKey: source.primaryKey}, data);
  }


  async insert(source){
    this.#validationSource(source);

    const data = source.transfromToDatabase?.() ?? source;

    const table = this.#getTable(source.type);

    return await table.insertOne(data);
  }


  async delete(source){
    this.#validationSource(source);

    const table = this.#getTable(source.type);

    return await table.deleteOne({primaryKey: source.primaryKey});
  }


  async find(source){
    this.#validationSource(source);

    const table = this.#getTable(source.type);

    return await table.findOne({primaryKey: source.primaryKey});
  }


  async select(source){
    return await this.find(source) || await this.insert(source);
  }


  #getTable(type){
    return this.client.collection(type);
  }

  #validationSource(source){
    if ("primaryKey" in source === false)
      throw new Error(`Data source mush have "primaryKey" property`);

    if ("type" in source === false)
      throw new Error(`Data source mush have "type" property`);
  }
}

export default Database;
