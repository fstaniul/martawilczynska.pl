import React, { useReducer, useEffect, useLayoutEffect } from "react";
import { IntlProvider } from "react-intl";
import { withRouter } from "react-router-dom";
import { LOCALES, DEFAULT_LOCALE, MESSAGES, PATH_TO_LOCALE, LocaleContext } from "../locale";
import dayjs from "dayjs";

const localeReducer = (state, locale) => {
  if (LOCALES.includes(locale)) return { locale, messages: MESSAGES[locale] };
  else return state;
};

const UnblockedIntlProvider = withRouter(IntlProvider);

export const Localization = withRouter(({ children, location }) => {
  const [{ locale, messages }, changeLocale] = useReducer(localeReducer, {
    locale: DEFAULT_LOCALE,
    messages: MESSAGES[DEFAULT_LOCALE]
  });

  useEffect(() => {
    if (localStorage) localStorage.setItem("locale", locale);
    dayjs.locale(locale); // set dayjs locale on locale change
  }, [locale]);

  useEffect(() => {
    document.title = messages["page.title"];
  }, [messages]);

  useLayoutEffect(() => {
    if (location.pathname === "/") return;
    const locationPathname = "/" + location.pathname.split("/")[1];
    const newLocaleInfo = PATH_TO_LOCALE[locationPathname];
    if (newLocaleInfo && newLocaleInfo.locale !== locale) changeLocale(newLocaleInfo.locale);
  }, [location.pathname]);

  return (
    <LocaleContext.Provider value={{ locale, messages, changeLocale }}>
      <UnblockedIntlProvider locale={locale} messages={messages}>
        {children}
      </UnblockedIntlProvider>
    </LocaleContext.Provider>
  );
});

export default Localization;
