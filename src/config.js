import { GatewayIntentBits as IntentBits } from 'discord.js';

const app = {
  ownerId: "921403577539387454",
  developers: ["921403577539387454", "469879141873745921"]
};

const events = {
  keyword: "events",
  required: true,
  path: "./src/events"
}

const commands = {
  keyword: "commands",
  required: true,
  path: "./src/commands",
  i18nBase: "command"
}

const server = {
  keyword: "server",
  required: false,
  apiList: "./src/api",
  port: [8000],
  middleware: "./src/modules/server/middleware.js"
}

const database = {
  keyword: "database",
  required: true,
  host:  process.env.MONGODB_URL,
  name:  process.env.DATABASE_NAME
}

const i18n = {
  keyword: "i18n",
  required: true,
  path: "./src/languages",
  defaultLocale: "ru"
}


const client = {
  keyword: "client",
  required: true,
  token: process.env.CLIENT_TOKEN,
  intents: [IntentBits.Guilds, IntentBits.GuildMessages]

}

const appPrepare = {
  clearConsole: false
};



export default {
  app,
  appPrepare,
  client,
  database,
  i18n,
  commands,
  events


};
