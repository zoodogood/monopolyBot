import Database from './Database/index.js';

const getDatabase = async ({host, token}) => {
  const database = new Database({host, token});

  return database;
}

export { getDatabase, Database };
