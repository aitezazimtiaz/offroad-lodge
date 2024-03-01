import React from "react";

const CheckinIcon = (props: React.ComponentProps<"svg">) => {
  return (
    <svg
      width="18"
      height="18"
      viewBox="0 0 26 27"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        d="M1 9.11133V17.1113C1 20.882 1 22.7687 2.172 23.9393C3.34267 25.1113 5.22933 25.1113 9 
25.1113H17C20.7707 25.1113 22.6573 25.1113 23.828 23.9393C25 22.7687 25 20.882 25 17.1113V9.11133C25 
5.34066 25 3.45399 23.828 2.28333C22.6573 1.11133 20.7707 1.11133 17 1.11133H9"
        stroke="#00A59B"
        stroke-width="2"
        stroke-linecap="round"
      />
      <path
        d="M17.0012 17.1115V18.4449H18.3345V17.1115H17.0012ZM7.27719 5.50221C7.02572 5.25934 6.68892 
5.12494 6.33933 5.12798C5.98973 5.13102 5.65531 5.27124 5.4081 5.51845C5.16089 5.76567 5.02067 6.10008 5.01763 
6.44968C5.01459 6.79927 5.14898 7.13608 5.39186 7.38755L7.27719 5.50221ZM15.6679 
7.77821V17.1115H18.3345V7.77821H15.6679ZM17.0012 15.7782H7.66786V18.4449H17.0012V15.7782ZM17.9439 
16.1689L7.27719 5.50221L5.39186 7.38755L16.0585 18.0542L17.9439 16.1689Z"
        fill="#00A59B"
      />
    </svg>
  );
};

export default CheckinIcon;