import React from 'react';
import logo from "../utils/logo.jpg";

const Header = () => {
  return (
    <div style={HeaderStyle}>
      <img src={logo} alt="Logo" style={logoStyle} />
      <div style={textContainer}>
        <h1 style={headerText}>CodeEditor</h1>
      </div>
    </div>
  );
}

const HeaderStyle = {
  height: "10vh",
  border: "5px solid black",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  padding: "5px",
};

const logoStyle = {
  height: "9vh",
};

const textContainer = {
  textAlign: "center",
  textShadow: "2px 2px 4px rgba(0, 0, 0, 0.5)",
};

const headerText = {
  fontSize: "28px",
  fontWeight: "bold",
  color: "#007BFF", // Blue text color
};

export default Header;
