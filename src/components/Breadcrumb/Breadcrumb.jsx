import React from "react";
import { Link } from "react-router-dom";
import "./breadcrumb.css";
import { ChevronRight } from "../../icons";
export default function Breadcrumb() {
  return (
    <nav className="breadcrumb">
      <Link to={"/"}>Home</Link>
      <ChevronRight />
      <Link to={"courses-list"}>Treinamento</Link>
    </nav>
  );
}
