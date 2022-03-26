import React from "react";
import { Link } from "react-router-dom";
import { Book, House, List } from "../../icons";
import IconButton from "../IconButton/IconButton";
import "./sidebar.css";

export default function Sidebar() {
  return (
    <nav className="sidebar">
      <div className="menu">
        <IconButton icon={<List />} />
      </div>
      <div className="home">
        <Link to={"/"}>
          <IconButton icon={<House />} />
        </Link>
      </div>
      <div className="courses">
        <Link to={"/courses-list"}>
          <IconButton icon={<Book />} />
        </Link>
      </div>
    </nav>
  );
}
