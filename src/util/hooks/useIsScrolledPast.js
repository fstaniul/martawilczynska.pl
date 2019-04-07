import { useState, useEffect } from 'react';

function useIsScrolledPast(value) {
  const [isScrolled, setScrolled] = useState((window.scrollY || window.pageYOffset) > value);

  useEffect(() => {
    function listener() {
      if ((window.scrollY || window.pageYOffset) > value) setScrolled(true);
      else setScrolled(false);
    }
    window.addEventListener('scroll', listener, { passive: true });
    return () => window.removeEventListener('scroll', listener);
  });

  return isScrolled;
}

export default useIsScrolledPast;
