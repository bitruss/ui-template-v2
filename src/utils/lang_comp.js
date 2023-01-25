import { createI18n } from "vue-i18n";

var i18n = createI18n({
  legacy: false,
  locale: getDefaultLang(),
  fallbackLocale: "en",
});

function setLang(lang) {
  i18n.global.locale.value = lang;
  window.localStorage.setItem("lang",lang)
}

function getDefaultLang() {
  var language = window.localStorage.getItem("lang");
  if (language == null || language == "") {
    return "en";
  } else {
    return language;
  }
}

export default {
  install: (app, options) => {
    app.use(i18n);
    app.provide("setLang", setLang);
  },
};
