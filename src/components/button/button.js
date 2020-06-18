import React from "react";

const Button = (props) => {
  const { classList, text } = props;
  return <button className={classList}>{text}</button>;
};

export default Button;
