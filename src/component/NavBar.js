import React, { useRef } from "react";

// NavBar component to display navigation options and actions
const NavBar = ({ languages, setSelectLang, locked, setLocked, handleCopyToClipboard }) => {
 
  // Function to handle language selection
  function handleLanguage(e) {
    setSelectLang(e.target.value);
  }

  // Function to toggle the lock state
  function handleLocked() {
    console.log("Clicked Lock/Unlock button");
    setLocked((prevLocked) => !prevLocked);
  }

  return (
    <div style={NavBarStyle}>
      {/* Dropdown to select a programming language */}
      <div>
        <select style={selectStyle} onClick={handleLanguage}>
          {languages.map((lan, ind) => (
            <option style={optionStyle}>{lan}</option>
          ))}
        </select>
      </div>
      {/* Button to copy code to the clipboard */}
      <div>
        <button  style={buttonStyle} onClick={handleCopyToClipboard}>Copy</button>
       
      </div>
      {/* Button to toggle the lock state, and label changes based on the lock state */}
      <div>
        <button onClick={handleLocked} style={buttonStyle}>
          {locked ? "Unlock" : "Lock"}
        </button>
      </div>
      {/* Button to save the code */}
      <div>
        <button style={buttonStyle}>Save</button>
      </div>
    </div>
  );
};

// Style for the NavBar component
const NavBarStyle = {
  width: "80%",
  height: "10%",
  display: "flex", // Display children in a flex container
  justifyContent: "space-around", // Space elements around horizontally
  alignItems: "center", // Center children vertically
};

const selectStyle = {
  padding: "8px",
  fontSize: "16px",
  border: "1px solid #ccc",
  borderRadius: "4px",
};

const optionStyle = {
  fontSize: "16px",
};

const buttonStyle = {
  backgroundColor: "#007BFF",
  color: "#fff",
  border: "none",
  borderRadius: "4px",
  padding: "10px 20px",
  fontSize: "16px",
  cursor: "pointer",
  transition: "background-color 0.3s ease",
};

export default NavBar; // Export the NavBar component
