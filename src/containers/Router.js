import React from "react";
import { Switch, Route } from "react-router-dom";
import { useLocale, localizePath } from "../locale";
import Home from "./routes/Home";
import Contact from "./routes/Contact";
import NotFound404 from "./routes/NotFound404";
import Nav from "./Nav";

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
