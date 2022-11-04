import { Database } from './mod.js';

async function getDatabase(){
  const database = new Database();
  return database;
}

async function launchDatabase(database, {host, name}){
  await database.connect({host, name});
}

export { getDatabase, launchDatabase };
