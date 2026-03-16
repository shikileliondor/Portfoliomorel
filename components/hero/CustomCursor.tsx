"use client";

import { useEffect, useState } from "react";

type Position = {
  x: number;
  y: number;
};

type CustomCursorProps = {
  isActive: boolean;
};

export function CustomCursor({ isActive }: CustomCursorProps) {
  const [position, setPosition] = useState<Position>({ x: -100, y: -100 });

  useEffect(() => {
    const updateMousePosition = (event: MouseEvent) => {
      setPosition({ x: event.clientX, y: event.clientY });
    };

    window.addEventListener("mousemove", updateMousePosition);

    return () => {
      window.removeEventListener("mousemove", updateMousePosition);
    };
  }, []);

  return (
    <div
      aria-hidden
      className="pointer-events-none fixed left-0 top-0 z-50 hidden h-9 w-9 -translate-x-1/2 -translate-y-1/2 md:block"
      style={{
        transform: `translate3d(${position.x}px, ${position.y}px, 0) translate(-50%, -50%) scale(${isActive ? 1.3 : 1})`,
        opacity: isActive ? 1 : 0.85,
        transition: "transform 160ms ease-out, opacity 160ms ease-out",
      }}
    >
      <div className="h-full w-full rounded-full border border-white/80 shadow-[0_0_20px_rgba(255,255,255,0.4)]" />
      <div className="absolute left-1/2 top-1/2 h-1 w-1 -translate-x-1/2 -translate-y-1/2 rounded-full bg-white/80" />
    </div>
  );
}
