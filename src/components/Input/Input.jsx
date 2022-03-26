import React from "react";
import "./input.css";

export default function Input({ type = "text", label, id, name, onChange }) {
  return (
    <div className="input">
      <label htmlFor={id} className="input-label">
        {label}
      </label>
      <input type={type} id={id} name={name} onChange={onChange} />
    </div>
  );
}
