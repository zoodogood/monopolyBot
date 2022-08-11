import { Client, GatewayIntentBits  } from 'discord.js';


function getClient(options){
  const client = new Client(options);
  return client;
}




export { getClient, Client };
