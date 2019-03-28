import { useContext } from "react";
import { NavContext } from "./NavContext";

const useNavSetBackground = () => {
  const { setWithBackground } = useContext(NavContext);
  return setWithBackground;
};

export default useNavSetBackground;
