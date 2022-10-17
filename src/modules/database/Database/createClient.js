import { MongoClient } from 'mongodb';




function createClient(url){
  return new MongoClient(url);
}




export default createClient;
