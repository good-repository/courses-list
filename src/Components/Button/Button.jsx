import React from "react";
import "./button.css";

export default function Button({
  size = "large",
  color = "primary",
  children,
  onClick,
}) {
  return (
    <button onClick={onClick} className={`button ${size} ${color}`}>
      {children}
    </button>
  );
}
