import React from "react";
import { Switch, Route } from "react-router-dom";
import { useLocale, localizePath } from "../util/locale";
import Nav from "../components/Nav";
import Home from "./Home";
import About from "./About";
import Contact from "./Contact";
import NotFound404 from "./NotFound404";

const Router = () => {
  const [locale] = useLocale();

  return (
    <>
      <Nav>
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path={localizePath(locale, "about")} component={About} />
          <Route path={localizePath(locale, "contact")} component={Contact} />
          <Route component={NotFound404} />
        </Switch>
      </Nav>
    </>
  );
};

export default Router;
