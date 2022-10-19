import config from './config.js';

import { scheduler } from 'timers/promises';
import { toColoredShell } from './util.js';

import SelectLanguage  from './stages/selectLanguage.js';
import CheckEnv        from './stages/checkEnv.js';
import RefreshCommands from './stages/refreshCommands.js';

async function run(){
  console.info("Hi!");

  // stage 1
  const i18n = await SelectLanguage(config);
  globalThis.i18n = i18n;
  // --

  console.clear();
  console.info(toColoredShell(
    i18n("greeting")
  ));
  console.info(i18n("description"));

  await scheduler.wait(2_000);

  // stage 2
  await CheckEnv(config);
  // --

  await scheduler.wait(2_000);

  console.info( i18n("CommandsRefresh_launch") );
  // stage 3
  await RefreshCommands(config);
  // --

  console.info(toColoredShell(
    i18n("CommandsRefresh_success")
  ));
}

run();
