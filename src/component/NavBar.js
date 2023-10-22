import React, { useRef, useState } from "react";

// NavBar component to display navigation options and actions
const NavBar = ({
  languages,
  setSelectLang,
  locked,
  setLocked
}) => {
  const editorRef = useRef(null);

  // Function to handle language selection
  function handleLanguage(e) {
    setSelectLang(e.target.value);
  }

  // Function to copy code to the clipboard
  const handleCopyToClipboard = () => {
    if (editorRef.current) {
      const codeText = editorRef.current.getValue();
      console.log("Code Text:", codeText);
    }
  };

  // Function to toggle the lock state
  function handleLocked() {
    console.log("Clicked Lock/Unlock button");
    setLocked((prevLocked) => !prevLocked);
  }

  return (
    <div style={NavBarStyle}>
      {/* Dropdown to select a programming language */}
      <div>
        <select onClick={handleLanguage}>
          {languages.map((lan, ind) => (
            <option>{lan}</option>
          ))}
        </select>
      </div>
      {/* Button to copy code to the clipboard */}
      <div>
        <button onClick={handleCopyToClipboard}>Copy</button>
      </div>
      {/* Button to toggle the lock state, and label changes based on the lock state */}
      <div>
        <button onClick={handleLocked}> {locked ? "Unlock" : "Lock" }</button>
      </div>
      {/* Button to save the code */}
      <div>
        <button>Save</button>
      </div>
    </div>
  );
};

// Style for the NavBar component
const NavBarStyle = {
  width: "100%",
  height: "10%",
  border: "1px solid red", // Add a red border
  display: "flex", // Display children in a flex container
  justifyContent: "space-around", // Space elements around horizontally
  alignItems: "center", // Center children vertically
};

export default NavBar; // Export the NavBar component
