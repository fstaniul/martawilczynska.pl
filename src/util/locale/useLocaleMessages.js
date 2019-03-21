import { useContext } from "react";
import { LocaleContext } from "./index";

export const useLocaleMessages = () => {
  const { messages } = useContext(LocaleContext);
  return messages;
};
