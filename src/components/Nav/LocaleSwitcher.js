import React from "react";
import { withRouter } from "react-router-dom";
import styled from "styled-components";
import PL_LOCALE_FLAG from "../../assets/img/locale/pl.png";
import EN_LOCALE_FLAG from "../../assets/img/locale/en.png";
import { useLocale, switchLocalePath } from "../../locale";
import IconButton from "../UI/IconButton";

const LOCALES = [
  {
    id: "pl",
    name: "Polski",
    icon: PL_LOCALE_FLAG
  },
  {
    id: "en",
    name: "English",
    icon: EN_LOCALE_FLAG
  }
];

const ImgButton = styled(IconButton)`
  padding: 0 2px;
  img {
    filter: grayscale(${({ active }) => (active ? 0 : 100)}%);
    transition: 100ms filter;

    &:hover {
      filter: grayscale(0);
    }
  }
`;

const LocaleSwitcher = ({ className, history, location }) => {
  const [currentLocale, changeLocale] = useLocale();
  const switchLocale = locale => {
    if (locale === currentLocale) return;
    if (location.pathname === "/") return changeLocale(locale);
    else history.push(switchLocalePath(locale, location.pathname));
  };

  return (
    <div className={className}>
      {LOCALES.map((locale, i) => (
        <ImgButton
          key={locale.id}
          onClick={() => switchLocale(locale.id)}
          active={currentLocale === locale.id}
        >
          <img src={locale.icon} alt={locale.name} />
        </ImgButton>
      ))}
    </div>
  );
};

export default withRouter(LocaleSwitcher);
