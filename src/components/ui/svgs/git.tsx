// import type { SVGProps } from "react";

// const Git = (props: SVGProps<SVGSVGElement>) => (
// //   <svg
// //     {...props}
// //     viewBox="0 0 256 256"
// //     xmlns="http://www.w3.org/2000/svg"
// //   >
// //     <defs>
// //       <linearGradient id="gitGrad" x1="0%" y1="0%" x2="100%" y2="100%">
// //         <stop offset="0%" stopColor="#F1502F" />
// //         <stop offset="100%" stopColor="#DE4423" />
// //       </linearGradient>
// //     </defs>
// //     <circle cx="128" cy="128" r="104" fill="url(#gitGrad)" />
// //     <path
// //       d="M128 64c-9.9 0-18 8.1-18 18s8.1 18 18 18 18-8.1 18-18-8.1-18-18-18zm0 72c-9.9 0-18 8.1-18 18s8.1 18 18 18 18-8.1 18-18-8.1-18-18-18zm0 72c-9.9 0-18 8.1-18 18s8.1 18 18 18 18-8.1 18-18-8.1-18-18-18z"
// //       fill="white"
// //     />
// //     <path d="M128 100v56M128 172v16" stroke="white" strokeWidth="8" fill="none" strokeLinecap="round" />
// //     <path d="M100 156h56" stroke="white" strokeWidth="8" fill="none" strokeLinecap="round" />
// //   </svg>
// <svg {...props} viewBox="-0.96 -0.96 49.92 49.92" xmlns="http://www.w3.org/2000/svg" fill="#be661e" stroke="#be661e" strokeWidth="1.008"><g id="SVGRepo_bgCarrier" strokeWidth="0"></g><g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g><g id="SVGRepo_iconCarrier"><defs><style>.a{fill:none,stroke:#d3783c,strokeLinecap:round;strokeLinejoin:round}</style></defs><path className="a" d="M4.21,22.12a2.87,2.87,0,0,0,0,3.77L22.12,43.8a2.87,2.87,0,0,0,3.77,0l17.9-17.91a2.85,2.85,0,0,0,0-3.77L25.89,4.21A2.68,2.68,0,0,0,24,3.51h0a2.66,2.66,0,0,0-1.88.71Z"></path><line className="a" x1="26.33" y1="17.85" x2="30.15" y2="21.67"></line><line className="a" x1="17.4" y1="8.92" x2="21.67" y2="13.19"></line><circle className="a" cx="24" cy="32.41" r="3.3"></circle><circle className="a" cx="24" cy="15.52" r="3.3"></circle><circle className="a" cx="32.48" cy="24" r="3.3"></circle><line className="a" x1="24" y1="29.11" x2="24" y2="18.82"></line></g></svg>
// );

// export { Git };
import type { SVGProps } from "react";

const Git = (props: SVGProps<SVGSVGElement>) => (
  <svg
    {...props}
    viewBox="-0.96 -0.96 49.92 49.92"
    xmlns="http://www.w3.org/2000/svg"
    fill="#FF6C37"
    stroke="##FF6C37"
    strokeWidth="1.008"
  >
    <defs>
      <style>
        {`
          .git-line {
            fill: none;
            stroke: #FF6C37;
            strokeLinecap: round;
            strokeLinejoin: round;
          }
        `}
      </style>
    </defs>

    <path
      className="git-line"
      d="M4.21,22.12a2.87,2.87,0,0,0,0,3.77L22.12,43.8a2.87,2.87,0,0,0,3.77,0l17.9-17.91a2.85,2.85,0,0,0,0-3.77L25.89,4.21A2.68,2.68,0,0,0,24,3.51h0a2.66,2.66,0,0,0-1.88.71Z"
    />

    <line className="git-line" x1="26.33" y1="17.85" x2="30.15" y2="21.67" />
    <line className="git-line" x1="17.4" y1="8.92" x2="21.67" y2="13.19" />

    <circle className="git-line" cx="24" cy="32.41" r="3.3" />
    <circle className="git-line" cx="24" cy="15.52" r="3.3" />
    <circle className="git-line" cx="32.48" cy="24" r="3.3" />

    <line className="git-line" x1="24" y1="29.11" x2="24" y2="18.82" />
  </svg>
);

export { Git };