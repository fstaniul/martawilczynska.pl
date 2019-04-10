import { useRef, useEffect, useCallback } from 'react';

export default function useStartStopInterval(func, interval) {
  const _interval = useRef(null);
  const stopInterval = useCallback(() => {
    clearInterval(_interval.current);
    _interval.current = null;
  }, [_interval]);

  const startInterval = useCallback(() => {
    if (_interval.current) stopInterval();
    _interval.current = setInterval(func, interval);
  }, [func, interval, _interval]);

  useEffect(() => {
    stopInterval();
    startInterval();
    return () => stopInterval();
  }, [startInterval, stopInterval]);

  return [startInterval, stopInterval];
}
