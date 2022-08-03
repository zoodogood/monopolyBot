import importI18n from './import.js';
import Getter from './Getter.js';

class I18nManager {
  constructor({defaultLocale}){
    this.defaultLocale = defaultLocale;
  }

  async importContent(path){
    return await importI18n(path);
  }

  async setContent(content){
    this.content = content;
    return this;
  }

  buildI18nGetter(){
    const getter = new Getter({i18n: this});
    return getter;
  }
}

export default I18nManager;
