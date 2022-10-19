import { getI18nManager } from '@module/I18nManager';

import { toColoredShell, readlineQuestion } from '../util.js';


const SelectLanguage = async (config) => {
  const I18nManager = await getI18nManager(config.i18n);
  const locales = getLocalesList(I18nManager);


  const locale = await requestLocale(locales);
  const i18n = I18nManager.buildI18nGetter().setLocale(locale);
  return i18n.setBase("main");
}



async function requestLocale(locales){

  const localesContent = locales
    .map(locale => `<${ toColoredShell(locale, 36) }>`)
    .join(" or ");

  const QUESTION = `Type ${ localesContent } for select a interface language\n`;
  const locale = await readlineQuestion(QUESTION);

  if (!locales.includes( locale.toLowerCase() )){
    return locales.at(0);
  }
  return locale;

}

function getLocalesList(manager){
  const content = manager.content;
  return Array.from(new Set(
    Object.keys(content)
      .map(key => key.split(".").at(0))
  ));
}



export default SelectLanguage;
