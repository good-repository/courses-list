import React from "react";
import "./dateInput.css";

export default function DateInput({ id, label, size = "default", minDate }) {
  return (
    <div className="date-input">
      <label htmlFor={id} className="date-input-label">
        {label}
      </label>
      <input
        type="date"
        id={id}
        min={minDate}
        className={`date-input-${size}`}
      />
    </div>
  );
}
