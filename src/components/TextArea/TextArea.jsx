import React from "react";
import "./textArea.css";

export default function TextArea({ label, id, name, onChange }) {
  return (
    <div className="textArea">
      <label htmlFor={id} className="textArea-label">
        {label}
      </label>
      <textArea id={id} name={name} onChange={onChange} />
    </div>
  );
}
