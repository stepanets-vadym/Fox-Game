import { useEffect, useState } from 'react';

export function useWindowSize() {
  const [windowSize, setWindowSize] = useState<any>({
    width: undefined,
    height: undefined,
  });

  useEffect(() => {
    function handelResize() {
      setWindowSize({
        width: window.innerWidth,
        height: window.innerHeight,
      });
    }

    window.addEventListener('resize', handelResize);

    handelResize();

    return () => window.removeEventListener('resize', handelResize);
  }, []);

  return windowSize;
}
