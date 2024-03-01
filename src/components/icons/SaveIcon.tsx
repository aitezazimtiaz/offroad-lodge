import React from "react";

const SaveIcon = (props: React.ComponentProps<"svg">) => {
  return (
    <svg
      width="22"
      height="22"
      viewBox="0 0 26 32"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        d="M0 0H26V32L13 22.8315L0 32V0ZM3.25 3.20915V25.7646L13 18.8874L22.75 25.7646V3.20915H3.25Z"
        fill="#00A59B"
      />
    </svg>
  );
};

export default SaveIcon;