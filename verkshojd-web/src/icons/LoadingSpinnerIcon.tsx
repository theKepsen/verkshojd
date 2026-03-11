import type { CSSProperties } from "react";

export const LoadingSpinnerIcon = (style?: CSSProperties | undefined) => {
  return (
    <svg
      style={{ ...style }}
      xmlns="http://www.w3.org/2000/svg"
      width="16"
      height="16"
      viewBox="0 0 16 16"
      fill="none"
    >
      <g clipPath="url(#clip0_1368_6970)">
        <circle
          cx="8"
          cy="8"
          r="7.25"
          stroke="black"
          strokeOpacity="0.07"
          strokeWidth="1.5"
        />
        <path
          d="M15.25 8C15.25 8.95208 15.0625 9.89484 14.6981 10.7745C14.3338 11.6541 13.7997 12.4533 13.1265 13.1265C12.4533 13.7997 11.6541 14.3338 10.7745 14.6981C9.89484 15.0625 8.95208 15.25 8 15.25"
          stroke={style?.stroke ? style.stroke : "#007AFF"}
          strokeWidth="1.5"
          strokeLinecap="round"
        />
      </g>
      <defs>
        <clipPath id="clip0_1368_6970">
          <rect width="16" height="16" fill="white" />
        </clipPath>
      </defs>
    </svg>
  );
};
