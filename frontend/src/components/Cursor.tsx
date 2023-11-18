import { useEffect, useRef, useState } from "react";
import "../style.css";
import React from "react";

type CursorProps = {
  top: number;
  left: number;
};

export function Cursor({ top, left }: CursorProps) {
  const cursorRef = useRef<HTMLSpanElement>(null);
  const [isAnimating, setIsAnimating] = useState(false);

  // Enables blinking cursor animation if user hasn't typed in 1.5s
  useEffect(() => {
    const timer = setTimeout(() => setIsAnimating(true), 1500);
    setIsAnimating(false);

    return () => clearTimeout(timer);
  }, [top, left]);

  useEffect(() => {
    if (cursorRef.current) {
      cursorRef.current.style.top = `${top}px`;
      cursorRef.current.style.left = `${left}px`;
    }
  }, [top, left]);

  const cursorClass = isAnimating ? "cursor animate" : "cursor";

  return <span className={cursorClass} ref={cursorRef}></span>;
}

export default React.memo(Cursor);
