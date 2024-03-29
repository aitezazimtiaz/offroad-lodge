import React from "react";

const LeftArrowIcon = (props: React.ComponentProps<"svg">) => {
  return (
    <svg
      width="8"
      height="14"
      viewBox="0 0 14 23"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        d="M11.3727 0.410511L0.555607 10.222C0.381343 10.3802 0.241461 10.5763 0.145558 10.7971C0.0496544 11.0179 0 11.258 0 11.5009C0 11.7439 0.0496544 11.984 0.145558 12.2048C0.241461 12.4255 0.381343 12.6217 0.555607 12.7798L11.3727 22.5913C12.4052 23.5277 14 22.7514 14 21.3124V1.68661C14 0.247665 12.4052 -0.528664 11.3727 0.410511Z"
        fill="#00A59B"
      />
    </svg>
  );
};

export default LeftArrowIcon;
