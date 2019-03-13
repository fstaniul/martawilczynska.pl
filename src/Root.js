import React from "react";
import { BrowserRouter } from "react-router-dom";
import Router from "./containers/Router";
import Localization from "./containers/Localization";
import GlobalStyles from "./containers/GlobalStyles";

const Root = () => {
  return (
    <BrowserRouter>
      <Localization>
        <GlobalStyles>
          <Router />
        </GlobalStyles>
      </Localization>
    </BrowserRouter>
  );
};

export default Root;
