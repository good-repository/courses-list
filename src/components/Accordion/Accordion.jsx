import React, { useState } from "react";
import { ChevronDoubleUp } from "../../icons";
import "./accordion.css";

export default function Accordion({ title, label, children }) {
  const [show, setShow] = useState(false);

  return (
    <div className="accordion-wrapper">
      <button
        className={`accordion-button ${show ? "open-accordion" : ""}`}
        onClick={() => setShow(!show)}
      >
        <p className="accordion-title">
          {title}
          {label}
        </p>
        <div className={show ? "" : "chevron-down"}>
          <ChevronDoubleUp />
        </div>
      </button>
      {show && children}
    </div>
  );
}
