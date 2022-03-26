import React from "react";
import "./input.css";

export default function Input({ type = "text", label, size = "default", id }) {
  return (
    <div className="input">
      <label htmlFor={id} className="input-label">
        {label}
      </label>
      <input type={type} id={id} className={`input-${size}`} />
    </div>
  );
}
