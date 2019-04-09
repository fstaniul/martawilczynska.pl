import { useState, useLayoutEffect } from 'react';

function scrolledPast(value) {
  return (window.scrollY || window.pageYOffset) > value;
}

function useIsScrolledPast(value) {
  const [isScrolled, setScrolled] = useState(scrolledPast(value));

  useLayoutEffect(() => {
    setScrolled(scrolledPast(value));
    function listener() {
      if (scrolledPast(value)) setScrolled(true);
      else setScrolled(false);
    }
    window.addEventListener('scroll', listener, { passive: true });
    return () => window.removeEventListener('scroll', listener);
  });

  return isScrolled;
}

export default useIsScrolledPast;
