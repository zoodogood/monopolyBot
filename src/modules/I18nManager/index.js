import I18nManager from './Manager.js';

const getI18nManager = async ({path, defaultLocale}) => {
  const manager = new I18nManager({defaultLocale});
  const content = await manager.importContent(path);

  manager.setContent(content);

  return manager;
}

export { getI18nManager, I18nManager };
