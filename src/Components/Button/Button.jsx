import React from "react";
import "./button.css";

export default function Button({
  size = "large",
  color = "primary",
  children,
}) {
  return <button className={`button ${size} ${color}`}>{children}</button>;
}
