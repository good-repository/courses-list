import React from "react";
import "./input.css";

export default function Input({
  type = "text",
  label,
  id,
  name,
  onChange,
  error,
  value,
}) {
  return (
    <div className="input">
      <label htmlFor={id} className="input-label">
        {label}
      </label>
      <input
        type={type}
        id={id}
        name={name}
        onChange={onChange}
        className={error ? "input-error" : ""}
        value={value}
      />
      {error && <p className="input-label-error">{error}</p>}
    </div>
  );
}
