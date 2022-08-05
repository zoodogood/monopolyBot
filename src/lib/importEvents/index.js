import { ImportDirectory } from '@zoodogood/import-directory';
import { Collection } from '@discordjs/collection';


const importEvents = async ({ path }) => {
  const options = { skipValidation: true };
  const modules = await new ImportDirectory(options)
    .import(path);


  const entries = modules
    .map(({ Event }) => new Event())
    .map((event) => [event.eventData.name, event]);

  return new Collection(entries);
}

export default importEvents;
