import React from "react";

const TVIcon = (props: React.ComponentProps<"svg">) => {
  return (
    <svg
      width="36"
      height="31"
      viewBox="0 0 36 31"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        d="M8.15385 29H27.8462M15.5385 24.0909V29M20.4615 24.0909V29M3.84615 24.0909H32.1538C33.1729 24.0909 34 23.2662 34 22.25V3.84091C34 2.82473 33.1729 2 32.1538 2H3.84615C2.82708 2 2 2.82473 2 3.84091V22.25C2 23.2662 2.82708 24.0909 3.84615 24.0909Z"
        stroke="#00A59B"
        stroke-width="3"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
    </svg>
  );
};

export default TVIcon;
