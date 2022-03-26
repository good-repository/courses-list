import React from "react";
import "./iconButton.css";

export default function IconButton({ icon, onClick, size = "default" }) {
  return (
    <button onClick={onClick} className={`icon-button ${size}`}>
      {icon}
    </button>
  );
}
