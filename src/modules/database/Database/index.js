import createClient from './createClient.js';

class Database {
  constructor({host, token}){
    this.client = createClient({host, token});
  }

  async update(source){
    this.#validationSource(source);

    const data = source.transfromToDatabase?.() ?? source;


    return await this.client
      .from(source.table)
      .update(data)
      .eq("_key", source._key);

  }

  async insert(source){
    this.#validationSource(source);

    const data = source.transfromToDatabase ?
      source.transfromToDatabase(source) :
      source;

    return await this.client
      .from(source.table)
      .insert([ data ]);

  }

  async delete(source){
    this.#validationSource(source);

    return await this.client
      .from(source.table)
      .delete(data)
      .eq("_key", source._key);
  }

  async select(source){
    this.#validationSource(source);

    const result = await this.client
      .from(source.table)
      .select()
      .eq("_key", source._key);

    const data = result.data.at(0);

    return source.transfromFromDatabase ?
      source.transfromFromDatabase(data) :
      Object.assign(source, data);
  }

  async selectAll({ table, filters }){
    const query = this.client
      .from(table)
      .select();

    filters.forEach(({method, args}) => query[method](args));

    return await query;
  }

  #validationSource(source){
    if ("_key" in source === false)
      throw new Error("Data source mush have key property");

    if ("table" in source === false)
      throw new Error("Data source mush have table property");
  }
}

export default Database;
