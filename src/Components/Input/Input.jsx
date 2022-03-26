import React from "react";
import "./input.css";

export default function Input({ type = "text", label, size = "default" }) {
  return (
    <div className="input">
      <label htmlFor="input" className="input-label">
        {label}
      </label>
      <input type={type} id="input" className={`input-${size}`} />
    </div>
  );
}
