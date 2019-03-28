import React, { useReducer, useCallback } from "react";
import Axios from "axios";
import { BackendServiceContext } from "./BackendServiceContext";

const backendServiceReducer = (state, action) => {
  if (!action.label) return state;
  return {
    ...state,
    [action.label]: {
      ...state[action.label],
      ...action.content
    }
  };
};

export const BackendService = ({ children }) => {
  const [state, setState] = useReducer(backendServiceReducer, {});
  const load = useCallback(
    (label, path) => {
      const { [label]: innerState } = state;
      if (typeof innerState === "undefined")
        setState({
          label,
          content: { loading: false, loaded: false, data: null, error: null }
        });
      else if (innerState.loaded) return;
      setState({ label, content: { loading: true } });
      Axios.get(path).then(
        data => {
          setState({
            label,
            content: { loaded: true, loading: false, data, error: null }
          });
        },
        err =>
          setState({
            label,
            content: { loaded: false, loading: false, data: null, error: err }
          })
      );
    },
    [state]
  );

  return (
    <BackendServiceContext.Provider value={{ content: state, load }}>
      {children}
    </BackendServiceContext.Provider>
  );
};

export default BackendService;
