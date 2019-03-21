import { useContext } from "react";
import { NavContext } from "./NavContext";
export const useNavState = () => {
  const { open, setOpen } = useContext(NavContext);
  return [open, setOpen];
};
