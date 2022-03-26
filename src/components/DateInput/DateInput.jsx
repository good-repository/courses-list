import React from "react";
import "./dateInput.css";

export default function DateInput({
  id,
  label,
  minDate,
  name,
  onChange,
  value,
}) {
  return (
    <div className="date-input">
      <label htmlFor={id} className="date-input-label">
        {label}
      </label>
      <input
        type="date"
        id={id}
        min={minDate}
        name={name}
        onChange={onChange}
        value={value}
      />
    </div>
  );
}
