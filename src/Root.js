import React from "react";
import { BrowserRouter } from "react-router-dom";
import Router from "./views/Router";
import { Localization } from "./util/locale";
import { GlobalStyles } from "./util/styles";
import { BackendService } from "./util/BackendService";

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
