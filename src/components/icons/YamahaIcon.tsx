import React from "react";

const YamahaIcon = (props: React.ComponentProps<"svg">) => {
  return (
    <svg
      width="44"
      height="44"
      viewBox="0 0 44 44"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        d="M22 0C16.1652 0 10.5695 2.31785 6.44365 6.44365C2.31785 10.5695 0 16.1652 0 22C0 27.8348 2.31785 33.4305 6.44365 37.5564C10.5695 41.6821 16.1652 44 22 44C27.8348 44 33.4305 41.6821 37.5564 37.5564C41.6821 33.4305 44 27.8348 44 22C44 16.1652 41.6821 10.5695 37.5564 6.44365C33.4305 2.31785 27.8348 0 22 0ZM22 1.045C33.5775 1.045 42.955 10.4225 42.955 22C42.955 33.5683 33.5775 42.955 22 42.955C10.4317 42.955 1.045 33.5757 1.045 22C1.045 10.4317 10.4317 1.045 22 1.045ZM22 1.474C21.8167 1.474 21.6645 1.584 21.6003 1.7435L20.6983 4.587C16.3044 4.91458 12.1968 6.8914 9.19954 10.1209C6.20224 13.3505 4.53687 17.5939 4.5375 22C4.5375 24.7133 5.15533 27.2892 6.26083 29.5827L4.24417 31.7937C4.19366 31.8625 4.16418 31.9445 4.1593 32.0298C4.15442 32.115 4.17435 32.1998 4.21667 32.274C4.26179 32.347 4.32682 32.4057 4.40411 32.443C4.4814 32.4803 4.56775 32.4949 4.653 32.4848L7.57167 31.8377C9.17312 34.1884 11.3248 36.1121 13.8395 37.4413C16.3542 38.7705 19.1556 39.465 22 39.4643C27.995 39.4643 33.2933 36.4357 36.4357 31.8377L39.3543 32.4848C39.439 32.4928 39.5242 32.4757 39.5991 32.4356C39.6741 32.3955 39.7357 32.3342 39.776 32.2593C39.8197 32.1855 39.8403 32.1003 39.835 32.0147C39.8298 31.929 39.799 31.847 39.7467 31.779L37.73 29.5827C38.8765 27.2196 39.4697 24.6265 39.4643 22C39.465 17.5939 37.7996 13.3505 34.8023 10.1209C31.805 6.8914 27.6974 4.91458 23.3035 4.587L22.3997 1.73617C22.366 1.65818 22.3102 1.59178 22.2391 1.54519C22.1681 1.49859 22.085 1.47384 22 1.474ZM21.9945 1.93233C22.0385 1.93233 22.0825 1.969 22.0972 2.01117L23.9672 8.16017C23.6947 8.36453 23.4734 8.62938 23.3207 8.93384C23.1679 9.2383 23.088 9.57406 23.0872 9.91467C23.0872 10.6278 23.4355 11.2603 23.9672 11.66H23.9598C24.7592 12.2577 25.2762 13.211 25.2762 14.2798V16.3332L33.2072 11.7553L34.0798 13.2678L25.2762 18.3462V20.1153L26.8052 20.9953L35.6088 15.9097L36.4815 17.4222L28.5505 22.0055L30.3325 23.0322C31.2638 23.5712 31.8322 24.4952 31.9495 25.4852V25.4778C31.9903 25.8152 32.1091 26.1384 32.2966 26.4218C32.484 26.7052 32.735 26.941 33.0294 27.1106C33.3239 27.2802 33.6538 27.3788 33.993 27.3986C34.3322 27.4185 34.6714 27.359 34.9837 27.225L39.3708 31.9183C39.4075 31.955 39.4075 32.0045 39.3855 32.0467C39.3562 32.0925 39.3122 32.1072 39.2608 32.0998L33.0037 30.6442C32.9634 30.3074 32.8454 29.9845 32.659 29.7012C32.4725 29.4178 32.2227 29.1817 31.9293 29.0116C31.6359 28.8414 31.3069 28.7418 30.9683 28.7206C30.6298 28.6995 30.291 28.7573 29.9787 28.8897L29.9842 28.8823C29.0675 29.2765 27.984 29.2472 27.0508 28.7082L25.2762 27.6815V36.8372H23.5308V26.6713L22.0018 25.7913L20.4747 26.6713V36.8372H18.7275V27.6833L16.9455 28.7008C16.0142 29.2398 14.9288 29.2692 14.0122 28.8768L14.0195 28.8842C13.7071 28.7515 13.3681 28.6933 13.0293 28.7143C12.6905 28.7353 12.3613 28.8348 12.0676 29.005C11.774 29.1752 11.524 29.4115 11.3374 29.695C11.1508 29.9786 11.0328 30.3016 10.9927 30.6387L4.7355 32.0925C4.71328 32.0987 4.68958 32.097 4.66849 32.0877C4.6474 32.0783 4.63025 32.0618 4.62 32.0412C4.59067 32.0045 4.598 31.955 4.63467 31.9183L9.02917 27.225C9.63967 27.4872 10.3675 27.4725 10.9853 27.1077C11.605 26.752 11.9827 26.1397 12.0633 25.4778V25.4852C12.1222 24.979 12.2988 24.4937 12.5789 24.068C12.8591 23.6424 13.235 23.2882 13.6767 23.034L15.455 22.0073L7.52217 17.4313L8.39667 15.917L17.2003 21.0027L18.7275 20.1153V18.348L9.92383 13.2697L10.7965 11.7553L18.7275 16.3313V14.2817C18.7275 13.2128 19.2445 12.2595 20.0457 11.6618H20.0383C20.57 11.2695 20.911 10.6352 20.911 9.9165C20.911 9.196 20.5627 8.5635 20.031 8.162L21.901 2.01483C21.9157 1.9635 21.9578 1.93233 21.9945 1.93233ZM22.0018 12.7527C21.5968 12.7527 21.2084 12.9136 20.922 13.2C20.6356 13.4864 20.4747 13.8748 20.4747 14.2798V17.3415L22 18.2233L23.5272 17.3433V14.2798C23.5272 13.8748 23.3663 13.4864 23.0799 13.2C22.7935 12.9136 22.405 12.7527 22 12.7527H22.0018ZM22.0018 20.24L20.4747 21.12V22.8873L22.0018 23.76L23.529 22.88V21.12L22.0018 20.24ZM17.1985 23.0193L14.5512 24.5465C14.3768 24.6466 14.2239 24.7802 14.1013 24.9395C13.9787 25.0988 13.8887 25.2808 13.8366 25.475C13.7845 25.6692 13.7712 25.8717 13.7976 26.0711C13.8239 26.2704 13.8894 26.4625 13.9902 26.6365C14.1239 26.869 14.3173 27.0615 14.5503 27.1943C14.7833 27.3271 15.0475 27.3953 15.3157 27.3918C15.5834 27.3923 15.8464 27.3221 16.0783 27.1883L18.7275 25.6593V23.8993L17.1985 23.0193ZM26.8107 23.0193L25.2835 23.8993V25.6667L27.9327 27.1957C28.2837 27.3931 28.6984 27.4441 29.0868 27.3375C29.4751 27.231 29.8058 26.9755 30.0069 26.6266C30.2081 26.2778 30.2634 25.8636 30.161 25.4741C30.0585 25.0846 29.8066 24.7513 29.4598 24.5465L26.8107 23.0193Z"
        fill="#00A59B"
      />
    </svg>
  );
};

export default YamahaIcon;