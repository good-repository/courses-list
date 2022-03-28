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
        <div className="accordion-title">
          <p>{title}</p>
          {label}
        </div>
        <div className={`chevron${show ? "-up" : "-down"}`}>
          <ChevronDoubleUp />
        </div>
      </button>
      {show && children}
    </div>
  );
}
