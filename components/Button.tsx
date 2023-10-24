import React from "react";
interface ButtonProps {
  children: React.ReactNode;
}
const Button: React.FC<ButtonProps> = ({ children }) => {
  return <div>Button</div>;
};

export default Button;
