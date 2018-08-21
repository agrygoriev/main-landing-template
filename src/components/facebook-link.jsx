import React from "react";
const FacebookLink = props => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 7 13"
      width="7"
      height="13"
    >
      <path
        d="M4.1 4.3h2.2l-.2 1.9H4V13H1.4V6.2H0V4.3h1.4V3c0-.6 0-1.5.4-2C2.3.4 2.9 0 4 0c1.8 0 2.5.2 2.5.2l-.3 2S5.6 2 5.1 2c-.6 0-1 .2-1 .7v1.6z"
        fill={props.colors.secondary}
      />
    </svg>
  );
};
export default FacebookLink;
