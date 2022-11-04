import { ImportDirectory } from '@zoodogood/import-directory';

const FILE_FORMAT = "js";

function likePathRegex(path){
  const format  = `\\.${ FILE_FORMAT }`;
  const pathEnd = path.split("/").at(-1);
  const pathRegex = `${ pathEnd }\\/`;

  return new RegExp(`${ pathRegex }(.+?)${ format }$`);
}


const importI18n = async (path) => {
  const options = { path, subfolders: true };

  const importDirectory = new ImportDirectory(options);
  const filesPath = importDirectory.takeFilesPath(options);

  const locales = {};
  const regex = likePathRegex(path);

  for (const path of filesPath){

    const likePath = path
      .match(regex).at(1)
      .replaceAll("/", ".");


    const {default: content} = await importDirectory.importFile(path);

    const transformKey = (key) => `${ likePath }.${ key }`;

    Object.entries(content)
      .forEach(([key, value]) =>
        locales[ transformKey(key) ] = value
      );
  }
  return locales;
}

export default importI18n;
