import React, { useEffect, useRef, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Book, House, List } from "../../icons";
import IconButton from "../IconButton/IconButton";
import "./sidebar.css";

export default function Sidebar() {
  const [expanded, setExpanded] = useState(false);
  const location = useLocation();

  const wrapperRef = useRef(null);
  useHandleClick(wrapperRef);

  function useHandleClick(ref) {
    useEffect(() => {
      function handleClickOutside(event) {
        if (ref.current && !ref.current.contains(event.target)) {
          setExpanded(false);
        }
      }
      document.addEventListener("mousedown", handleClickOutside);
      return () => {
        document.removeEventListener("mousedown", handleClickOutside);
      };
    }, [ref]);
  }

  return (
    <nav className={`sidebar ${expanded ? "expanded" : ""}`} ref={wrapperRef}>
      <div className="menu">
        <div className="menu-icon">
          <IconButton
            className="sidebar-link"
            icon={<List />}
            onClick={() => setExpanded(!expanded)}
          />
        </div>
      </div>
      <div
        className={`home ${
          location.pathname === "/" ? "active-route" : "inactive-route"
        } `}
      >
        <Link
          className="sidebar-link"
          to={"/"}
          onClick={() => setExpanded(false)}
        >
          <IconButton icon={<House />} />
          <p>Início</p>
        </Link>
      </div>
      <div
        className={`courses ${
          location.pathname.includes("/courses-list")
            ? "active-route"
            : "inactive-route"
        } `}
      >
        <Link
          className="sidebar-link"
          to={"/courses-list"}
          onClick={() => setExpanded(false)}
        >
          <IconButton icon={<Book />} />
          <p>Treinamento</p>
        </Link>
      </div>
    </nav>
  );
}
