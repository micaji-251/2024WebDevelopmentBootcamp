import React from "react";

interface InputProps {
  type: string;
  placeholder: string;
}
const Input = (props: InputProps) => {
  return <input type={props.type} placeholder={props.placeholder} />;
};

export default Input;
