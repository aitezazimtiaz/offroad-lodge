import React from "react";

const PencilIcon = (props: React.ComponentProps<"svg">) => {
  return (
    <svg
      width="14"
      height="14"
      viewBox="0 0 23 22"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        d="M14.5882 3.68567L18.2941 7.39588M12.1176 21H22M2.23529 16.053L1 21L5.94118 19.7633L20.2533 5.43441C20.7165 4.97057 20.9766 4.34154 20.9766 3.68567C20.9766 3.02979 20.7165 2.40076 20.2533 1.93692L20.0408 1.7242C19.5775 1.2605 18.9492 1 18.2941 1C17.639 1 17.0107 1.2605 16.5474 1.7242L2.23529 16.053Z"
        stroke={props.stroke}
        stroke-width="1.5"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
    </svg>
  );
};

export default PencilIcon;
