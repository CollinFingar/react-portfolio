import React, { useLayoutEffect, useState, useRef } from "react";
import { AnimateWrapper } from "./AnimateIn.style";

const AnimateIn = ({ delay = 0, children, scrollTopAddition = 200 }) => {
  const ourRef = useRef(null);
  const [animate, setAnimate] = useState(false);

  const onScroll = () => {
    if (typeof window !== "undefined") {
      const { scrollY, innerHeight } = window;
      const scrollPosition = scrollY + innerHeight;
      const topPosition =
        scrollY + ourRef?.current?.getBoundingClientRect().top;
      if (topPosition + scrollTopAddition < scrollPosition) {
        setAnimate(true);
        window.removeEventListener("scroll", onScroll);
      }
    }
  };

  useLayoutEffect(() => {
    window.addEventListener("scroll", onScroll);
    onScroll();
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <AnimateWrapper ref={ourRef} delay={delay} animate={animate}>
      {children}
    </AnimateWrapper>
  );
};

export default AnimateIn;
