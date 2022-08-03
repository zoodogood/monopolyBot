class Getter {
  constructor({i18n}){
    this.i18n = i18n;
    this.data = { constructor: this };
  }



  getter(key, args){
    const {locale, base, constructor} = this.data;

    if (!locale || !base)
      throw new Error("Getter should not be called without parameters set");

    const defaultLocale = constructor.i18n.defaultLocale;

    const fullKey = (locale, key) => `${ locale }.${ base }.${ key }`;

    const contentsList = constructor.i18n.content;
    const content = contentsList[ fullKey(locale, key) ] ?? contentsList[ fullKey(defaultLocale, key) ];

    const value = typeof content === "function" ?
      content() :
      content;

    return value;
  }

  clone(data){
    const getter = this.getter.bind({data});
    getter.__proto__ = this.constructor.prototype;

    getter.data = data;
    return getter;
  }

  assignData(assign){
    const data = {...this.data};
    Object.assign(data, assign);

    return this.clone(data);
  }

  setLocale(locale){
    return this.assignData({locale: locale});
  }

  setBase(base){
    return this.assignData({base: base});
  }
}



export default Getter;
