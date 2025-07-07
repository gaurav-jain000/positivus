import gsap from "gsap";
import { useGSAP } from "@gsap/react";

export function ThemeStarIcon({ className }: { className?: string }) {
  useGSAP(() => {
    gsap.fromTo(
      "#theme-star",
      {
        scale: 0.5,
        rotate: 90,
      },
      {
        keyframes: [
          { scale: 1.2, duration: 0.3 },
          { scale: 1, duration: 0.3 },
        ],
        rotate: 0,
        duration: 1,
        ease: "power2.out",
      }
    );
  });
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="1em"
      height="1em"
      id="theme-star"
      className={className}
      viewBox="0 0 36 36"
      fill="none"
    >
      <path
        d="M17.9986 5.53472L35.5997 0.349121L30.464 18.0001L35.5997 35.6012L17.9986 30.4655L0.347656 35.6012L5.53325 18.0001L0.347656 0.349121L17.9986 5.53472Z"
        className="fill-current"
      ></path>
    </svg>
  );
}
