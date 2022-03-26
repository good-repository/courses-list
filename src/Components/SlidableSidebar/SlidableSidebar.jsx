import React from "react";
import { Close, Question } from "../../Icons";
import "./slidableSidebar.css";

export default function SlidableSidebar({
  open,
  handleClose,
  title,
  tooltipText,
  children,
}) {
  function closeSideBar() {
    handleClose(false);
  }

  return (
    open && (
      <div className="slidable">
        <div className="slidable-header">
          <button onClick={closeSideBar} className="button-close">
            <Close />
          </button>
          <p className="slidable-title">{title}</p>
          <div className="tooltip">
            <Question />
            <span class="tooltip-text">{tooltipText}</span>
          </div>
        </div>
        <div className="slidable-children">{children}</div>
      </div>
    )
  );
}
