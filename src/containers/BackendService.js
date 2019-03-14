import React, {
  createContext,
  useReducer,
  useContext,
  useEffect,
  useCallback
} from "react";
import Axios from "axios";

const BackendServiceContext = createContext();

export const useBackendData = (label, path) => {
  let {
    load,
    content: { [label]: state }
  } = useContext(BackendServiceContext);
  if (typeof state === "undefined") {
    state = {
      loaded: false,
      loading: false,
      data: null,
      error: null
    };
  }
  useEffect(() => load(label, path), []);
  return { ...state, reload: () => load(label, path) };
};

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

const BackendService = ({ children }) => {
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
