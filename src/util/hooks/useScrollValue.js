import { useState, useLayoutEffect } from 'react';

function windowScroll() {
  return window.pageYOffset || window.scrollY;
}

const useScrollValue = () => {
  const [scroll, setScroll] = useState(windowScroll());

  useLayoutEffect(() => {
    setScroll(windowScroll());
    const listener = () => setScroll(window.pageYOffset || window.screenY);
    window.addEventListener('scroll', listener);
    return () => window.removeEventListener('scroll', listener);
  }, []);

  return scroll;
};

export default useScrollValue;
