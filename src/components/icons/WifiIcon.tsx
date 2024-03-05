import React from "react";

const WifiIcon = (props: React.ComponentProps<"svg">) => {
  return (
    <svg
      width="42"
      height="30"
      viewBox="0 0 42 30"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        d="M14.0004 21.2271C15.8569 19.431 18.3747 18.422 21 18.422C23.6253 18.422 26.1431 19.431 27.9996 21.2271M8.0002 15.4213C15.1789 8.4732 26.8192 8.4732 33.9998 15.4213M2 9.6154C12.4937 -0.538466 29.5063 -0.538466 40 9.6154M21.9994 27.033L21 28L20.0006 27.033C20.2658 26.7767 20.6252 26.6328 21 26.6328C21.3748 26.6328 21.7342 26.7767 21.9994 27.033Z"
        stroke="#00A59B"
        stroke-width="3"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
    </svg>
  );
};

export default WifiIcon;