import { useEffect, useState } from 'react';

export default function useMatchMedia(mediaQuery) {
  const [matches, setMatches] = useState(window.matchMedia(mediaQuery).matches);

  useEffect(() => {
    const mql = window.matchMedia(mediaQuery);
    function screenTest(e) {
      console.log(e.matches);
      setMatches(e.matches);
    }
    mql.addEventListener('change', screenTest);

    return () => {
      mql.removeEventListener('change', screenTest);
    };
  }, [mediaQuery]);

  return { matches };
}
