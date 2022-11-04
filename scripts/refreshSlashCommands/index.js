import 'dotenv/config';

import config from '#config';

import { REST } from '@discordjs/rest';
import { Routes } from 'discord-api-types/v10';

import { ApplicationCommandManager } from 'discord.js';
import importCommands from '#lib/importCommands.js';


function needForward(command){
  return !command.commandOptions.omit;
}


function transfromCommand(command){
  const options = command.commandOptions;
  return ApplicationCommandManager.transformCommand(options);
}



const commands = await importCommands({path: config.commands.path});

const commandsData = commands
  .filter(needForward)
  .map(transfromCommand);


const rest = new REST({ version: '10' }).setToken(process.env.CLIENT_TOKEN);

const clientUser = await rest.get( Routes.user() );

console.info(`----\nStarted refreshing application (/) commands (${ commandsData.length })`);

await rest.put(
  Routes.applicationCommands(clientUser.id),
  { body: commandsData },
);

console.info('Successfully reloaded application (/) commands.');

