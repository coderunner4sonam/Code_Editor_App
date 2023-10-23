import Editor from "@monaco-editor/react";
import { useRef } from "react";

// CodeEditor component that displays a code editor with optional "Locked" overlay
const CodeEditor = ({ selectlang, locked }) => {
  // Create a reference to the Monaco editor instance
  const editorRef = useRef(null);

  return (
    <div style={CodeEditorStyle}>
      {/* Render the Monaco editor */}
      <Editor
        height="99%"
        width="99.5%"
        theme="vs-dark"
        language={selectlang}
        onMount={(editor) => {
          editorRef.current = editor; // Store a reference to the editor instance
        }}
      />
      
      {/* Conditionally render a "Locked" overlay if the 'locked' prop is true */}
      {locked && <div style={LockedStyle}> 🔑Locked </div>}
    </div>
  );
};

// Styles for the CodeEditor component
const CodeEditorStyle = {
  position: "relative", // Position the component relative to its container
  width: "99%", // Set the width of the editor
  height: "86.3%", // Set the height of the editor
  backgoundColor: "black", // Define the background color (note the typo, should be "backgroundColor")
};

// Styles for the "Locked" overlay
const LockedStyle = {
  position: "absolute",
  top: "0",
  left: "0",
  width: "100%",
  height: "100%",
  color: "white",
  backgroundColor: "rgba(0, 0, 0, 0.7)", // Add a semi-transparent black background
  textAlign: "center",
  border: "2px solid grey", // Change the border color to green
  borderRadius: "5px", // Add rounded corners
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  zIndex: 2,
  fontSize: "24px", // Increase font size
};

export default CodeEditor; // Export the CodeEditor component
