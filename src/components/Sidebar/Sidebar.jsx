import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Book, House, List } from "../../icons";
import IconButton from "../IconButton/IconButton";
import "./sidebar.css";

export default function Sidebar() {
  const [expanded, setExpanded] = useState(true);
  const location = useLocation();

  return (
    <nav className={`sidebar ${expanded ? "expanded" : ""}`}>
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
