import { useState, useEffect } from "react";

const useScrollValue = () => {
  const [scroll, setScroll] = useState(window.pageYOffset || window.scrollY);

  useEffect(() => {
    const listener = () => setScroll(window.pageYOffset || window.screenY);
    window.addEventListener("scroll", listener);
    return () => window.removeEventListener("scroll", listener);
  }, [setScroll]);

  return scroll;
};

export default useScrollValue;
