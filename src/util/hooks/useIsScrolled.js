import { useState, useEffect } from "react";

const getScrollValue = () => window.scrollY || window.pageYOffset;

const useIsScrolled = () => {
  const [scrolled, setScrolled] = useState(getScrollValue() > 0);

  useEffect(() => {
    const listener = () => {
      const isScrolled = getScrollValue() > 0;
      if (isScrolled && !scrolled) setScrolled(true);
      else if (scrolled && !isScrolled) setScrolled(false);
    };
    window.addEventListener("scroll", listener);
    return () => window.removeEventListener("scroll", listener);
  }, [setScrolled, getScrollValue, scrolled]);

  return scrolled;
};

export default useIsScrolled;
