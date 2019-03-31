import React, { useEffect } from "react";
import { Route, Switch, Redirect } from "react-router-dom";
import styled from "styled-components";
import useNavSetBackground from "../../components/Nav/useNavSetBackground";
import { useLocale, localizePath } from "../../util/locale";
import useWindowWidth from "../../util/hooks/useWindowWidth";
import { media } from "../../util/styles";
import Nav from "./Nav";
import Info from "./Info";

const NavWrapper = styled.div`
  padding: 12rem 2.5rem 0;
`;

const index = () => {
  const [locale] = useLocale();
  const navSetBackground = useNavSetBackground();
  const windowWidth = useWindowWidth();

  useEffect(() => {
    navSetBackground(true);
  }, [navSetBackground]);

  const localePath = localizePath(locale, "treatments");
  const viewDesktop = windowWidth > media.md;

  return (
    <Switch>
      {viewDesktop && <Redirect exact from={localePath} to={localePath + "/" + 0} />}
      <Route
        path={localePath}
        exact
        render={() => (
          <NavWrapper>
            <Nav toLeft={!viewDesktop} />
          </NavWrapper>
        )}
      />
      <Route path={localePath + "/:id"} render={props => <Info {...props} displayNav={viewDesktop} />} />
    </Switch>
  );
};

export default index;
