import React from "react";

const WAVE = (
  <svg
    viewBox="0 0 1440 104"
    preserveAspectRatio="none"
    xmlns="http://www.w3.org/2000/svg"
    fillRule="evenodd"
    clipRule="evenodd"
    display="block"
  >
    <path
      d="M-123.316 70.163c22.79-14.32 49.856-23.012 76.561-30.097 38.612-10.245 78.032-17.874 117.994-22.949 129.348-16.429 260.85-21.668 390.83-12.931 190.318 12.012 330.995 63.321 515.826 73.88 116.29 6.643 233.195 4.725 348.887-7.758 48.847-5.271 97.161-12.902 144.655-24.168 31.967-7.583 64.776-17.024 91.873-34.049v92.908h-1686.626v-34.837z"
      fill="#FFFFFF"
    />
  </svg>
);

const BUMP = (
  <svg viewBox="0 0 1088 60" preserveAspectRatio="none" xmlns="http://www.w3.org/2000/svg" display="block">
    <path
      d="M1087.5 60h-1087.5v-.759c232.821 0 336.464-59.241 543.75-59.241l1.213.001c206.478.23 310.171 59.24 542.537 59.24v.759z"
      fill="#FFFFFF"
    />
  </svg>
);

const Separator = ({ separator, rotate }) => {
  return (
    <div style={{ transform: `translateY(${rotate ? -2 : 2}px) rotate(${rotate ? 180 : 0}deg)` }}>{separator === "bump" ? BUMP : WAVE}</div>
  );
};

export default Separator;
