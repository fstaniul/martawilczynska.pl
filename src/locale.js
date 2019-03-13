import { createContext, useContext } from "react";
import { addLocaleData } from "react-intl";
import PL_LOCALE_DATA from "react-intl/locale-data/pl";
import EN_LOCALE_DATA from "react-intl/locale-data/en";
import EN_MESSAGES from "./assets/locale/en.json";
import PL_MESSAGES from "./assets/locale/pl.json";

addLocaleData([...PL_LOCALE_DATA, ...EN_LOCALE_DATA]);

export const LOCALES = ["pl", "en"];
export const MESSAGES = {
  pl: PL_MESSAGES,
  en: EN_MESSAGES
};
export const DEFAULT_LOCALE =
  window.LOCALE ||
  (localStorage && localStorage.getItem("locale")) ||
  LOCALES[0];

export const LOCALE_ROUTES = {
  pl: {
    about: "/o-mnie",
    contact: "/kontakt",
    staff: "/gabinet-i-personel",
    directions: "/dojazd",
    treatments: "/zabiegi-operacyjne",
    testimonials: "/opinie-pacjentow"
  },
  en: {
    about: "/about-me",
    contact: "/contact",
    staff: "/cabinet-and-staff",
    directions: "/directions",
    treatments: "/surgical-treatments",
    testimonials: "/patients-testimonials"
  }
};

export const PATH_TO_LOCALE = Object.keys(LOCALE_ROUTES).reduce(
  (acc, locale) => {
    Object.keys(LOCALE_ROUTES[locale]).forEach(
      routeKey =>
        (acc[LOCALE_ROUTES[locale][routeKey]] = { path: routeKey, locale })
    );
    return acc;
  },
  {}
);

export const localizePath = (locale, name) =>
  name === "/" ? "/" : LOCALE_ROUTES[locale][name];

export const switchLocalePath = (locale, pathname) => {
  if (pathname === "/") return "/";
  const path = "/" + pathname.split("/")[1];
  const currentLocaleInfo = PATH_TO_LOCALE[path];
  return LOCALE_ROUTES[locale][currentLocaleInfo.path];
};

export const LocaleContext = createContext();
export const LocaleConsumer = LocaleContext.Consumer;

export const useLocale = () => {
  const { locale, changeLocale } = useContext(LocaleContext);
  return [locale, changeLocale];
};
export const useLocaleMessages = () => {
  const { messages } = useContext(LocaleContext);
  return messages;
};
