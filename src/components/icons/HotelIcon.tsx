import React from "react";

const HotelIcon = (props: React.ComponentProps<"svg">) => {
  return (
    <svg
      width="40"
      height="40"
      viewBox="0 0 40 40"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        d="M2 2H38"
        stroke="#00A59B"
        stroke-width="3"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <path
        d="M32.5996 2H7.39961C6.4055 2 5.59961 2.80589 5.59961 3.8V36.2C5.59961 37.1941 6.4055 38 7.39961 38H32.5996C33.5937 38 34.3996 37.1941 34.3996 36.2V3.8C34.3996 2.80589 33.5937 2 32.5996 2Z"
        stroke="#00A59B"
        stroke-width="3"
        stroke-linejoin="round"
      />
      <path
        d="M16.4004 27.2002H23.6004V38.0002H16.4004V27.2002Z"
        stroke="#00A59B"
        stroke-width="3"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <path
        d="M11.9004 9.2002H13.7004M11.9004 14.6002H13.7004M19.1004 9.2002H20.9004M19.1004 14.6002H20.9004M26.3004 9.2002H28.1004M26.3004 14.6002H28.1004"
        stroke="#00A59B"
        stroke-width="3"
        stroke-linecap="round"
      />
      <path
        d="M2 37.9998H38M23.6 27.1998H25.4C25.8968 27.1998 26.309 26.793 26.2136 26.3052C25.7168 23.7492 23.1239 21.7998 20 21.7998C16.877 21.7998 14.2832 23.7483 13.7864 26.3052C13.691 26.793 14.1032 27.1998 14.6 27.1998H16.4"
        stroke="#00A59B"
        stroke-width="3"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
    </svg>
  );
};

export default HotelIcon;
