import { useState, useEffect } from "react";

export const useViewPort = () => {
  const [width, setWidth] = useState<number>(0);

  useEffect(() => {
    const handleWindowResize = () => setWidth(window.innerWidth);
    window.addEventListener("resize", handleWindowResize);
    handleWindowResize();
    return () => window.removeEventListener("resize", handleWindowResize);
  }, []);

  return [width];
};