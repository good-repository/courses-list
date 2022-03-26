import React from "react";
import "./textArea.css";

export default function TextArea({ label, id, name, onChange, value }) {
  return (
    <div className="textArea">
      <label htmlFor={id} className="textArea-label">
        {label}
      </label>
      <textarea id={id} name={name} onChange={onChange} value={value} />
    </div>
  );
}
