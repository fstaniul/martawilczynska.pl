import React, { useReducer, useEffect, useLayoutEffect } from "react";
import { IntlProvider } from "react-intl";
import { withRouter } from "react-router-dom";
import {
  LOCALES,
  DEFAULT_LOCALE,
  MESSAGES,
  PATH_TO_LOCALE,
  LocaleContext
} from "../locale";

const localeReducer = (state, locale) => {
  if (LOCALES.includes(locale)) return { locale, messages: MESSAGES[locale] };
  else return state;
};

const UnblockedIntlProvider = withRouter(IntlProvider);

const Localization = ({ children, location }) => {
  const [{ locale, messages }, changeLocale] = useReducer(localeReducer, {
    locale: DEFAULT_LOCALE,
    messages: MESSAGES[DEFAULT_LOCALE]
  });

  useEffect(() => {
    if (localStorage) {
      localStorage.setItem("locale", locale);
    }
  }, [locale]);

  useEffect(() => {
    document.title = messages["page.title"];
  }, [messages]);

  useLayoutEffect(() => {
    if (location.pathname === "/") return;
    const locationPathname = "/" + location.pathname.split("/")[1];
    const newLocaleInfo = PATH_TO_LOCALE[locationPathname];
    if (newLocaleInfo && newLocaleInfo.locale !== locale)
      changeLocale(newLocaleInfo.locale);
  }, [location.pathname]);

  return (
    <LocaleContext.Provider value={{ locale, messages, changeLocale }}>
      <UnblockedIntlProvider locale={locale} messages={messages}>
        {children}
      </UnblockedIntlProvider>
    </LocaleContext.Provider>
  );
};

export default withRouter(Localization);
