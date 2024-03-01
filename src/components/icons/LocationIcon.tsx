import React from "react";

const LocationIcon = (props: React.ComponentProps<"svg">) => {
  return (
    <svg
      width="24"
      height="27"
      viewBox="0 0 24 27"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        d="M12 0C15.1826 0 18.2348 1.21913 20.4853 3.38919C22.7357 5.55926 24 8.50249 24 11.5714C24 
16.362 20.2133 21.3814 12.8 26.7429C12.5692 26.9098 12.2885 27 12 27C11.7115 27 11.4308 26.9098 11.2 
26.7429C3.78667 21.3814 0 16.362 0 11.5714C0 8.50249 1.26428 5.55926 3.51472 3.38919C5.76515 1.21913 
8.8174 0 12 0ZM12 7.71429C10.9391 7.71429 9.92172 8.12066 9.17157 8.84402C8.42143 9.56737 8 10.5485 8 11.5714C8
 12.5944 8.42143 13.5755 9.17157 14.2988C9.92172 15.0222 10.9391 15.4286 12 15.4286C13.0609 15.4286 14.0783 15.0222 
 14.8284 14.2988C15.5786 13.5755 16 12.5944 16 11.5714C16 10.5485 15.5786 9.56737 14.8284 8.84402C14.0783 8.12066 
 13.0609 7.71429 12 7.71429Z"
        fill="#00A59B"
      />
    </svg>
  );
};

export default LocationIcon;