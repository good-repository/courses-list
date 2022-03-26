import React from "react";
import "./button.css";

export default function Button({
  size = "medium",
  color = "primary",
  children,
  onClick,
  type = "button",
}) {
  return (
    <button type={type} onClick={onClick} className={`button ${size} ${color}`}>
      {children}
    </button>
  );
}
