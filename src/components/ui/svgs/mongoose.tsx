import type { SVGProps } from "react";

const Mongoose = (props: SVGProps<SVGSVGElement>) => (
  <svg
    {...props}
    viewBox="0 0 256 256"
    xmlns="http://www.w3.org/2000/svg"
  >
    <defs>
      <linearGradient id="mongooseGrad" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stopColor="#8B4513" />
        <stop offset="100%" stopColor="#654321" />
      </linearGradient>
    </defs>
    <rect x="28" y="48" width="200" height="160" rx="16" fill="url(#mongooseGrad)" />
    <path d="M64 96h128v8H64z" fill="white" />
    <path d="M64 120h128v8H64z" fill="white" />
    <path d="M64 144h128v8H64z" fill="white" />
    <path d="M64 168h80v8H64z" fill="white" />
    <circle cx="128" cy="64" r="12" fill="white" />
  </svg>
);

export { Mongoose };
