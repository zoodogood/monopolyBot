import I18nManager from './Manager.js';

async function getI18nManager({defaultLocale}){
  const manager = new I18nManager({defaultLocale});
  return manager;
}

async function initializeI18nManager(manager, {path}){
  const content = await manager.importContent(path);
  manager.setContent(content);
}

export { getI18nManager, initializeI18nManager };
