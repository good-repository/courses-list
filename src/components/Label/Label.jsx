import React from "react";
import "./label.css";

export default function Label({ color, children }) {
  return <div className={`label ${color}`}>{children}</div>;
}
