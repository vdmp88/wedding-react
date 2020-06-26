import React from "react";

const Button = (props) => {
  const { classList, text, callback, htmlType = "button" } = props;
  return (
    <button onClick={callback} className={classList} type={htmlType}>
      {text}
    </button>
  );
};

export default Button;
