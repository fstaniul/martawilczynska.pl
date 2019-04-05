import React from "react";
import { BrowserRouter } from "react-router-dom";
import Router from "./views/Router";
import { Localization } from "./util/locale";
import { GlobalStyles } from "./util/styles";
import { TestimonialsProvider } from "./util/api/testimonials";

const Root = () => {
  return (
    <BrowserRouter>
      <Localization>
        <GlobalStyles>
          <TestimonialsProvider>
            <Router />
          </TestimonialsProvider>
        </GlobalStyles>
      </Localization>
    </BrowserRouter>
  );
};

export default Root;
