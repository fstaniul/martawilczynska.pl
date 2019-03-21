import React from "react";
import { Link } from "react-router-dom";
import { localizePath } from "./index";
import { useLocaleMessages } from "./useLocaleMessages";
import { useLocale } from "./useLocale";

export const TranslatedLocaleLink = ({ to, id, ...props }) => {
  const [locale] = useLocale();
  const { [id]: message } = useLocaleMessages();
  return (
    <Link to={localizePath(locale, to)} {...props}>
      {message}
    </Link>
  );
};

export default TranslatedLocaleLink;
