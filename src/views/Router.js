import React from "react";
import { Switch, Route } from "react-router-dom";
import { useLocale, localizePath } from "../util/locale";
import Home from "./Home";
import Contact from "./Contact";
import NotFound404 from "./NotFound404";
import Nav from "../components/Nav";

const Router = () => {
  const [locale] = useLocale();

  return (
    <>
      <Nav />
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path={localizePath(locale, "contact")} component={Contact} />
        <Route component={NotFound404} />
      </Switch>
    </>
  );
};

export default Router;
