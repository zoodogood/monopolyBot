import { Client } from './mod.js';


function getClient(options){
  const client = new Client(options);
  return client;
}

function startClient(client, {token}){
  client.login(token);
}

export { getClient, startClient };
