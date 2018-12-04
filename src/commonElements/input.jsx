import React from "react";

const Input = props => {
  const { name, placeholder, ...rest } = props;
  return (
    <input
      {...rest}
      name={name}
      id={name}
      placeholder={placeholder}
      className="form-control my-3 border-top-0 border-right-0 border-left-0"
      type="text"
    />
  );
};

export default Input;
