import React from "react";
import { Link } from "react-router-dom";
import { localizePath } from "./index";
import { useLocale } from "./useLocale";

export const LocaleLink = ({ to, children, ...props }) => {
  const [locale] = useLocale();
  return (
    <Link {...props} to={localizePath(locale, to)}>
      {children}
    </Link>
  );
};

export default LocaleLink;
