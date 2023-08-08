import { useEffect, useLayoutEffect, useState } from 'react';

interface WindowSize {
  width: number;
  height: number;
}

export function useWindowSize(): WindowSize {
  const [windowSize, setWindowSize] = useState<WindowSize>({
    width: 0,
    height: 0,
  });

  useLayoutEffect(() => {
    const handleSize = () => {
      setWindowSize((prev) => ({
        ...prev,
        width: window.innerWidth,
        height: window.innerHeight,
      }));
    };

    handleSize();

    window.addEventListener('resize', handleSize);

    return () => {
      window.removeEventListener('resize', handleSize);
    };
  }, []);

  return windowSize;
}
