import { ImportDirectory } from '@zoodogood/import-directory';
import { Collection } from '@discordjs/collection';


const importCommands = async ({ path }) => {
  const options = { skipValidation: true };
  const modules = await new ImportDirectory(options)
    .import(path);

  const entries = modules
    .map(({ Command }) => new Command())
    .map((command) => [command.commandData.name, command]);

  return new Collection(entries);
}

export default importCommands;
