"use client";
import React, { useRef, useEffect, useState } from "react";

import { useLenis } from "lenis/react";

const lerp = (start, end, factor) => start + (end - start) * factor;

const ParallaxImage = ({ src, alt, speed = 0.2 }) => {
  const imageRef = useRef(null);
  const bounds = useRef(null);
  const currentTranslateY = useRef(0);
  const targetTranslateY = useRef(0);
  const rafId = useRef(null);
  const [isDesktop, setIsDesktop] = useState(false);

  useEffect(() => {
    if (typeof window === "undefined") return;

    const checkScreenSize = () => {
      setIsDesktop(window.innerWidth >= 900);
    };

    checkScreenSize();

    window.addEventListener("resize", checkScreenSize);

    return () => {
      window.removeEventListener("resize", checkScreenSize);
    };
  }, []);

  useEffect(() => {
    if (!isDesktop) return;

    const updateBounds = () => {
      if (imageRef.current) {
        const rect = imageRef.current.getBoundingClientRect();
        bounds.current = {
          top: rect.top + window.scrollY,
          bottom: rect.bottom + window.scrollY,
          height: rect.height,
        };
      }
    };

    updateBounds();
    window.addEventListener("resize", updateBounds);

    const animate = () => {
      if (imageRef.current && bounds.current) {
        currentTranslateY.current = lerp(
          currentTranslateY.current,
          targetTranslateY.current,
          0.1
        );

        if (
          Math.abs(currentTranslateY.current - targetTranslateY.current) > 0.01
        ) {
          imageRef.current.style.transform = `translateY(${currentTranslateY.current}px) scale(1.5)`;
        }
      }
      rafId.current = requestAnimationFrame(animate);
    };

    animate();

    return () => {
      window.removeEventListener("resize", updateBounds);
      if (rafId.current) {
        cancelAnimationFrame(rafId.current);
      }
    };
  }, [isDesktop]);

  useLenis(({ scroll }) => {
    if (!isDesktop || !bounds.current) return;

    const windowHeight = window.innerHeight;
    const elementMiddle = bounds.current.top + bounds.current.height / 2;
    const windowMiddle = scroll + windowHeight / 2;
    const distanceFromCenter = windowMiddle - elementMiddle;

    targetTranslateY.current = distanceFromCenter * speed;
  });

  return (
    <img
      ref={imageRef}
      src={src}
      alt={alt}
      style={{
        width: "100%",
        height: "100%",
        objectFit: "cover",
        willChange: isDesktop ? "transform" : "auto",
        transform: isDesktop ? "translateY(0) scale(1.5)" : "none",
        position: "absolute",
        top: 0,
        left: 0,
      }}
    />
  );
};

export default ParallaxImage;
