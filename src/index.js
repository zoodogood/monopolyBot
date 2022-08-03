import 'dotenv/config';
import App from './App.js';

import config from './config.js';


const app = new App(config);
globalThis.app = app;

await app.prepare(config.appPrepare);
app.launch();
