import 'dotenv/config';
import test from 'node:test';

import { getDatabase } from '@module/database';
import config from '../../src/config.js'
//
// import { ImportDirectory } from '@zoodogood/import-directory';
// const METHODS_PATH = "./tests/database/methods";
//
//
// const TestMethod = (method) => {
//   console.info(method.description);
//   method.test();
// }
console.log(config.database);

test("Database", async (testOptions) => {
  testOptions.diagnostic("123");
  // const database = await getDatabase(config.database);
  //
  // const importDirectory = new ImportDirectory();
  // const methods = (await importDirectory.import(METHODS_PATH))
  //   .map((module) => module.default)
  //   .map(Method => new Method(database));
  //
  // methods.forEach(TestMethod);

})
