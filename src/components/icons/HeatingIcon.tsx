import React from "react";

const HeatingIcon = (props: React.ComponentProps<"svg">) => {
  return (
    <svg
      width="35"
      height="35"
      viewBox="0 0 35 35"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        d="M32.9844 3.03281V31.9516C32.9844 32.2255 32.8756 32.4882 32.6819 32.6819C32.4882 32.8756 32.2255 32.9844 31.9516 32.9844H3.03281C2.75889 32.9844 2.49619 32.8756 2.3025 32.6819C2.10881 32.4882 2 32.2255 2 31.9516V3.03281C2 2.75889 2.10881 2.49619 2.3025 2.3025C2.49619 2.10881 2.75889 2 3.03281 2H31.9516C32.2255 2 32.4882 2.10881 32.6819 2.3025C32.8756 2.49619 32.9844 2.75889 32.9844 3.03281Z"
        stroke="#757575"
        stroke-width="3"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <path
        d="M10.6065 7.16211C10.6065 7.16211 6.30308 12.3262 10.6065 17.4902C14.9098 22.6543 10.6065 27.8184 10.6065 27.8184M17.4919 7.16211C17.4919 7.16211 13.1885 12.3262 17.4919 17.4902C21.7953 22.6543 17.4919 27.8184 17.4919 27.8184M24.3773 7.16211C24.3773 7.16211 20.0739 12.3262 24.3773 17.4902C28.6807 22.6543 24.3773 27.8184 24.3773 27.8184"
        stroke="#757575"
        stroke-width="3"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
    </svg>
  );
};

export default HeatingIcon;
