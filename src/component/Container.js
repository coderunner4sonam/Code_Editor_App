import React, { useState, useRef } from "react";
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
  const [locked, setLocked] = useState(false);

  const editorRef = useRef(null);

  // This function is called when the Monaco Editor is mounted and ready.
  const handleEditorDidMount = (editor) => {
    // Store a reference to the editor instance for later use.
    editorRef.current = editor;
  };

  // This function is called when the "Copy to Clipboard" button is clicked.
  const handleCopyToClipboard = () => {
    if (editorRef.current) {
      // Get the code from the editor using the getValue function.
      const code = editorRef.current.getValue();

      // Use the Clipboard API to copy the code to the clipboard.
      navigator.clipboard.writeText(code).then(() => {
        console.log("Code copied to clipboard:", code);
      });
    }
  };

  return (
    <div style={ContainerStyle}>
      {/* Render the NavBar component with language selection and controls */}
      <NavBar
        languages={languages}
        setSelectLang={setSelectLang}
        locked={locked}
        setLocked={setLocked}
        handleCopyToClipboard={handleCopyToClipboard}
      />

      {/* Render the FileNavbar component */}
      <FileNavbar />

      {/* Render the CodeEditor component with the selected language and lock status */}
      <CodeEditor selectlang={selectlang} locked={locked} handleEditorDidMount={handleEditorDidMount}/>
    </div>
  );
};

// Style for the Container component
const ContainerStyle = {
  width: "80%", // Set the width to 100% of the parent container
  height: "100%", // Set the height to 100% of the parent container
};

export default Container; // Export the Container component
