import React from "react";

const FiltersIcon = (props: React.ComponentProps<"svg">) => {
  return (
    <svg
      width="28"
      height="28"
      viewBox="0 0 37 33"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        d="M5.625 16.5V2M31 31V25.5625M5.625 31V23.75M31 18.3125V2M18.3125 7.4375V2M18.3125 31V14.6875"
        stroke="#00A59B"
        stroke-width="3"
        stroke-linecap="round"
      />
      <path
        d="M5.625 23.75C7.62703 23.75 9.25 22.127 9.25 20.125C9.25 18.123 7.62703 16.5 5.625 16.5C3.62297 16.5 2 18.123 2 20.125C2 22.127 3.62297 23.75 5.625 23.75Z"
        stroke="#00A59B"
        stroke-width="3"
        stroke-linecap="round"
      />
      <path
        d="M18.3125 14.6875C20.3145 14.6875 21.9375 13.0645 21.9375 11.0625C21.9375 9.06047 20.3145 7.4375 18.3125 7.4375C16.3105 7.4375 14.6875 9.06047 14.6875 11.0625C14.6875 13.0645 16.3105 14.6875 18.3125 14.6875Z"
        stroke="#00A59B"
        stroke-width="3"
        stroke-linecap="round"
      />
      <path
        d="M31 25.5625C33.002 25.5625 34.625 23.9395 34.625 21.9375C34.625 19.9355 33.002 18.3125 31 18.3125C28.998 18.3125 27.375 19.9355 27.375 21.9375C27.375 23.9395 28.998 25.5625 31 25.5625Z"
        stroke="#00A59B"
        stroke-width="3"
        stroke-linecap="round"
      />
    </svg>
  );
};

export default FiltersIcon;
