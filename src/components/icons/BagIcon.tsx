import React from "react";

const BagIcon = (props: React.ComponentProps<"svg">) => {
  return (
    <svg
      width="26"
      height="26"
      viewBox="0 0 34 32"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        d="M30.6 6.73684H25.5V3.36842C25.5 1.49895 23.987 0 22.1 0H11.9C10.013 0 8.5 1.49895 8.5
 3.36842V6.73684H3.4C1.513 6.73684 0 8.23579 0 10.1053V28.6316C0 30.5011 1.513 32 3.4 32H30.6C32.487 32 34 30.5011 
 34 28.6316V10.1053C34 8.23579 32.487 6.73684 30.6 6.73684ZM11.9 3.36842H22.1V6.73684H11.9V3.36842ZM30.6 
 28.6316H3.4V25.2632H30.6V28.6316ZM30.6 20.2105H3.4V10.1053H8.5V13.4737H11.9V10.1053H22.1V13.4737H25.5V10.1053H30.6V20.2105Z"
        fill="#00A59B"
      />
    </svg>
  );
};

export default BagIcon;
