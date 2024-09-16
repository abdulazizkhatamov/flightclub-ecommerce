// useIsDesktop.ts
import { useEffect, useState } from "react";

const useIsDesktop = (breakpoint: number = 768) => {
  const [isDesktop, setIsDesktop] = useState<boolean>(
    window.innerWidth >= breakpoint,
  );

  const handleResize = () => {
    setIsDesktop(window.innerWidth >= breakpoint);
  };

  useEffect(() => {
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, [breakpoint]);

  return isDesktop;
};

export default useIsDesktop;
