import React from "react";
import { BrowserRouter } from "react-router-dom";
import Router from "./containers/Router";
import Localization from "./containers/Localization";
import GlobalStyles from "./containers/GlobalStyles";
import BackendService from "./containers/BackendService";

const Root = () => {
  return (
    <BrowserRouter>
      <Localization>
        <GlobalStyles>
          <BackendService>
            <Router />
          </BackendService>
        </GlobalStyles>
      </Localization>
    </BrowserRouter>
  );
};

export default Root;
