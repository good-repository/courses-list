import React from "react";
import "./header.css";
import profilePicture from "../../assets/guilherme.jpg";

export default function Header() {
  return (
    <header className="header">
      <div className="info">
        <h3>Guilherme Fünkler Borelli</h3>
        <p>Key Account</p>
      </div>
      <div className="profile-picture">
        <img src={profilePicture} alt="profilePicture" />
      </div>
    </header>
  );
}
