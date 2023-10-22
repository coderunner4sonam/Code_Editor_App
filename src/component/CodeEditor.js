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
  width: "100.2%", // Set the width of the editor
  height: "86.3%", // Set the height of the editor
  backgoundColor: "black", // Define the background color (note the typo, should be "backgroundColor")
};

// Styles for the "Locked" overlay
const LockedStyle = {
  position: "absolute", // Position the overlay absolutely within its parent
  top: "0", // Place it at the top
  left: "0", // Place it at the left
  width: "99%", // Set the width of the overlay
  height: "99%", // Set the height of the overlay
  color: "white", // Text color
  backgoundColor: "transparent", // Background color (note the typo, should be "backgroundColor")
  textAlign: "center", // Center text horizontally
  border: "1px solid green", // Add a border
  display: "flex", // Use flex display for content positioning
  justifyContent: "center", // Center content horizontally
  alignItems: "center", // Center content vertically
  zIndex: 2, // Set the stacking order of the overlay
};

export default CodeEditor; // Export the CodeEditor component
