"use client";

import { HERO_INITIALS } from "@/components/hero/constants";

type AnimatedInitialsProps = {
  transform: string;
  onHoverChange: (hovered: boolean) => void;
};

export function AnimatedInitials({ transform, onHoverChange }: AnimatedInitialsProps) {
  const letters = HERO_INITIALS.join(".");

  return (
    <div
      className="relative w-full"
      onMouseEnter={() => onHoverChange(true)}
      onMouseLeave={() => onHoverChange(false)}
      style={{ transform, transition: "transform 350ms ease-out" }}
    >
      <svg viewBox="0 0 1900 430" className="w-full" role="img" aria-label="B.E.Y.A.M" preserveAspectRatio="xMidYMid meet">
        <defs>
          <pattern id="linePattern" patternUnits="userSpaceOnUse" width="18" height="18" patternTransform="rotate(35)">
            <path d="M 0 9 H 18" stroke="rgba(15,23,42,0.38)" strokeWidth="1" className="hero-pattern-line" />
          </pattern>
        </defs>

        {letters.split("").map((char, index) => {
          const isDot = char === ".";
          return (
            <text
              key={`${char}-${index}`}
              x={70 + index * 172}
              y={330}
              fill={isDot ? "none" : "url(#linePattern)"}
              stroke="rgba(15,23,42,0.9)"
              strokeWidth={isDot ? 2 : 1.6}
              fontSize={isDot ? 170 : 340}
              fontWeight={700}
              letterSpacing={isDot ? "0" : "0.03em"}
              className="hero-letter"
              style={{ animationDelay: `${index * 120}ms` }}
            >
              {char}
            </text>
          );
        })}
      </svg>
    </div>
  );
}
