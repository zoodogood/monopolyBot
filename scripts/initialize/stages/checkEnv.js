import 'dotenv/config';
import FileSystem from 'node:fs';

import { toColoredShell, readlineQuestion } from '../util.js';

const CheckEnv = async ({envConfig}) => {

  console.info(toColoredShell(
    i18n("env_checksExists")
  ));

  const list = envConfig.envList;
  list.forEach(({key}) => console.info(`- ${ key }`));

  list
    .filter(({key}) => getVariableValue(key) !== undefined)
    .forEach(variable => variable.value = getVariableValue(variable.key));

  const missing = list.filter(({key}) => getVariableValue(key) === undefined);

  if (missing.length === 0){
    console.info(i18n("env_noMissing"));
    return true;
  }

  console.info( i18n("env_missing", missing.length) );

  for (const variable of missing){
    variable.value = await requestVariableValue(variable);
  };

  createFile(list);
}



const getVariableValue = (key) => process.env[key];

function transfromDescription(description){
  const descriptionGetter = i18n.setBase("envDescriptions");

  return descriptionGetter(description)
    .split("\n")
    .map(line => `# ${ line }`)
    .join("\n");

}

async function requestVariableValue(environment){
  console.info(toColoredShell(
    `\n${ environment.key }:`,
    36
  ));

  const BASE = "envDescriptions";
  const descriptionGetter = i18n.setBase(BASE);

  const description = descriptionGetter(environment.description);
  console.info(description);

  let value = "";
  while (true){
    value = await readlineQuestion(`${ i18n("env_enterKey") }\n`);
    value = value.trim();

    if (environment.regex.test(value) === true){
      break;
    }

    console.info(toColoredShell( i18n("env_noSuccessTestRegex") ));
  }


  return value;
}

function createFile(list){

  const content = list
    .map(({key, description, value}) => `${ transfromDescription(description) }\n${ key } = ${ value }`)
    .join( "\n".repeat(4) );

  FileSystem.writeFileSync(".env", content, "utf-8");
}



export default CheckEnv;
