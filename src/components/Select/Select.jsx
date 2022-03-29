import React from "react";
import "./select.css";

export default function Select({ label, options, error, onChange, name, id }) {
  return (
    <>
      <label htmlFor="select">{label}</label>

      <select
        name={name}
        id={id}
        className={`select ${error ? "select-error" : ""}`}
        onChange={onChange}
      >
        {options?.length &&
          options.map((option) => (
            <option key={option.id} value={option.id}>
              {option.title}
            </option>
          ))}
      </select>
      {error && <p className="select-label-error">{error}</p>}
    </>
  );
}
