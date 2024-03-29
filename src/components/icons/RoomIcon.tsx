import React from "react";

const RoomIcon = (props: React.ComponentProps<"svg">) => {
  return (
    <svg
      width="40"
      height="39"
      viewBox="0 0 40 39"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        d="M34.641 33.5785V6.12713H27.4514V0L5.88244 3.71876V33.5785H0V36.1929H7.09978L27.4514 39V8.74155H32.0266V36.1929H39.2163V33.5785H34.641ZM24.837 36.0003L8.49686 33.7465V5.92108L24.837 3.10421V36.0003Z"
        fill="#00A59B"
      />
      <path
        d="M19.6074 17.8926H22.2218V23.1214H19.6074V17.8926Z"
        fill="#00A59B"
      />
    </svg>
  );
};

export default RoomIcon;
