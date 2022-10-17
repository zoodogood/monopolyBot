import Database from './Database/index.js';

const getDatabase = async ({host, name}) => {
  const database = new Database();
  await database.connect({host, name});

  return database;
}

export { getDatabase, Database };
