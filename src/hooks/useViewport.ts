"use client";

import { useEffect, useState } from "react";

export function useViewport() {
  const [width, setWidth] = useState<number>(1280);

  useEffect(() => {
    const updateWidth = () => setWidth(window.innerWidth);

    updateWidth();
    window.addEventListener("resize", updateWidth);
    return () => window.removeEventListener("resize", updateWidth);
  }, []);

  return {
    width,
    isMobile: width < 768,
    isTablet: width < 1024,
  };
}
