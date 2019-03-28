import { useContext, useEffect } from "react";
import { BackendServiceContext } from "./BackendServiceContext";

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

export default useBackendData;
