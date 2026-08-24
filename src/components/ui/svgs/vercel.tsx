import type { SVGProps } from "react";

const Vercel = (props: SVGProps<SVGSVGElement>) => (
  <svg
    {...props}
    viewBox="0 0 256 256"
    xmlns="http://www.w3.org/2000/svg"
  >
    <rect x="24" y="24" width="208" height="208" fill="black" />
    <polygon points="128,56 200,200 56,200" fill="white" />
    <polygon points="128,100 164,180 92,180" fill="black" />
  </svg>
);

export { Vercel };
