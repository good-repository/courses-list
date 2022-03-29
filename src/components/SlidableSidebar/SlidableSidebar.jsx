import React, { useRef, useEffect } from "react";
import { Close, Question } from "../../icons";
import "./slidableSidebar.css";

export default function SlidableSidebar({
  open,
  handleClose,
  title,
  tooltipText,
  children,
}) {
  const wrapperRef = useRef(null);
  useOutsideAlerter(wrapperRef);

  function closeSideBar() {
    handleClose();
  }

  function useOutsideAlerter(ref) {
    useEffect(() => {
      function handleClickOutside(event) {
        if (ref.current && !ref.current.contains(event.target)) {
          handleClose();
        }
      }
      document.addEventListener("mousedown", handleClickOutside);
      return () => {
        document.removeEventListener("mousedown", handleClickOutside);
      };
    }, [ref]);
  }

  return (
    open && (
      <div className="slidable-wrapper">
        <div className="slidable" ref={wrapperRef}>
          <div className="slidable-header">
            <button onClick={closeSideBar} className="button-close">
              <Close />
            </button>
            <p className="slidable-title">{title}</p>
            <div className="tooltip">
              <Question />
              <span className="tooltip-text">{tooltipText}</span>
            </div>
          </div>
          <div className="slidable-children">{children}</div>
        </div>
      </div>
    )
  );
}
