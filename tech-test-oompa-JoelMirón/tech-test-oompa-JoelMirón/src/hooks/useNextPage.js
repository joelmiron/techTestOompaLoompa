import { useState } from "react";
import { useEffect } from "react/cjs/react.development";

export const useNextPage = (elementRef) => {
  const [isNextPage, setIsNextPage] = useState(0);

  useEffect(() => {
    const observeNextPage = (entries) => {
      const nextPage = entries[0];
      if (nextPage.isIntersecting) {
        setIsNextPage(isNextPage => isNextPage  + 1);
        
      }
    };

    const observer = new IntersectionObserver(observeNextPage, {
      rootMargin: "100px",
    });
    observer.observe(elementRef.current);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

return isNextPage

};
