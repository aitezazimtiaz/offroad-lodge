import React from "react";

const YoutubeIcon = (props: React.ComponentProps<"svg">) => {
  return (
    <svg
      width="27"
      height="19"
      viewBox="0 0 27 19"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        d="M26.4041 2.96109C26.2493 2.38876 25.9472 1.86698 25.5279 1.44772C25.1087 1.02846 24.5869 0.726335 24.0146 0.571439C21.9193 0 13.4865 0 13.4865 0C13.4865 0 5.05332 0.0172971 2.95805 0.588736C2.38571 0.743641 1.86394 1.04578 1.4447 1.46506C1.02545 1.88434 0.72336 2.40614 0.568506 2.97849C-0.065266 6.70139 -0.311118 12.3742 0.585909 15.9482C0.740779 16.5205 1.04288 17.0423 1.46212 17.4616C1.88136 17.8808 2.40313 18.1829 2.97545 18.3378C5.07073 18.9093 13.5037 18.9093 13.5037 18.9093C13.5037 18.9093 21.9366 18.9093 24.0318 18.3378C24.6041 18.183 25.1259 17.8809 25.5452 17.4616C25.9645 17.0423 26.2666 16.5205 26.4214 15.9482C27.0899 12.22 27.2959 6.55067 26.4041 2.96109Z"
        fill="#FF0000"
      />
      <path
        d="M10.8008 13.5063L17.7964 9.45431L10.8008 5.40234V13.5063Z"
        fill="white"
      />
    </svg>
  );
};

export default YoutubeIcon;