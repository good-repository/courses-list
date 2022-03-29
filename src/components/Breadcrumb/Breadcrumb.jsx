import React from "react";
import { Link, useLocation } from "react-router-dom";
import "./breadcrumb.css";
import { ChevronRight } from "../../icons";
export default function Breadcrumb() {
  const location = useLocation();
  return (
    <nav className="breadcrumb">
      <Link to={"/"}>Home</Link>
      {location.pathname.includes("/courses-list") && (
        <div className="breadcrumb-link">
          <ChevronRight />
          <Link to={"courses-list"}>Treinamento</Link>
        </div>
      )}
    </nav>
  );
}
