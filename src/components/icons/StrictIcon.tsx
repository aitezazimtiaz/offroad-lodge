import React from "react";

const StrictIcon = (props: React.ComponentProps<"svg">) => {
  return (
    <svg
      width="20"
      height="20"
      viewBox="0 0 30 30"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        d="M12 0C5.3832 0 0 5.3832 0 12C0 18.6168 5.3832 24 12 24C18.6168 24 24 18.6168 24 12C24 5.3832 18.6168 
0 12 0ZM2.4 12C2.4 9.7848 3.1608 7.7496 4.4256 6.1236L17.8764 19.5744C16.1988 20.887 14.1301 21.6001 12 
21.6C6.7068 21.6 2.4 17.2932 2.4 12ZM19.5744 17.8764L6.1236 4.4256C7.80126 3.11315 9.86997 2.40007 
12 2.4C17.2932 2.4 21.6 6.7068 21.6 12C21.5994 14.1299 20.8864 16.1985 19.5744 17.8764Z"
        fill="#FF0000"
      />
    </svg>
  );
};

export default StrictIcon;
