import { useState, useLayoutEffect } from 'react';

const isScrolled = () => (window.scrollY || window.pageYOffset) > 0;

const useIsScrolled = () => {
  const [scrolled, setScrolled] = useState(isScrolled());

  useLayoutEffect(() => {
    setScrolled(isScrolled());
    const listener = () => {
      setScrolled(isScrolled());
    };
    window.addEventListener('scroll', listener, { passive: true });
    return () => window.removeEventListener('scroll', listener);
  });

  return scrolled;
};

export default useIsScrolled;
