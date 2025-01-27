import { useState, useLayoutEffect, useCallback } from "react";

export const useIsMobile = (breakpoint = 500) => {
  const [isMobile, setIsMobile] = useState(window.innerWidth <= breakpoint);

  const handleResize = useCallback(() => {
    setIsMobile(window.innerWidth <= breakpoint);
  }, [breakpoint]);

  useLayoutEffect(() => {
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, [handleResize]);

  return isMobile;
};
