import React from "react";

const Button = (props) => {
  const { classList, text, callback } = props;
  return (
    <button onClick={callback} className={classList}>
      {text}
    </button>
  );
};

export default Button;
