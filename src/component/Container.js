import React, { useState } from "react";
import NavBar from "./NavBar";
import CodeEditor from "./CodeEditor";
import FileNavbar from "./FileNavbar";

// Container component to manage the application's state and structure
const Container = () => {
  // State variables for languages, selected language, code to copy, and lock status
  const [languages, setLanguages] = useState([
    "select a language",
    "javascript",
    "python",
    "c++",
    "c",
    "java",
  ]);
  const [selectlang, setSelectLang] = useState("");
  const [codeToCopy, setCodeToCopy] = useState("");
  const [locked, setLocked] = useState(false);

  return (
    <div style={ContainerStyle}>
      {/* Render the NavBar component with language selection and controls */}
      <NavBar
        languages={languages}
        setSelectLang={setSelectLang}
        locked={locked}
        setLocked={setLocked}
      />

      {/* Render the FileNavbar component */}
      <FileNavbar />

      {/* Render the CodeEditor component with the selected language and lock status */}
      <CodeEditor selectlang={selectlang} locked={locked} />
    </div>
  );
};

// Style for the Container component
const ContainerStyle = {
  width: "100%", // Set the width to 100% of the parent container
  height: "100%", // Set the height to 100% of the parent container
  border: "1px solid purple", // Add a border with a purple color
};

// Style for the NavBar component
const NavBarStyle = {
  width: "100%", // Set the width to 100% of the parent container
  height: "10%", // Set the height to 10% of the parent container
  border: "1px solid red", // Add a border with a red color
};

export default Container; // Export the Container component
