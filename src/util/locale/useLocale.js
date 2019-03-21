import { useContext } from "react";
import { LocaleContext } from "./index";

export const useLocale = () => {
  const { locale, changeLocale } = useContext(LocaleContext);
  return [locale, changeLocale];
};
