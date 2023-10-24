import Editor from "@monaco-editor/react";

// CodeEditor component that displays a code editor with optional "Locked" overlay
const CodeEditor = ({ selectlang, locked, handleEditorDidMount }) => {
  
  // Configuration options for the Monaco Editor.
  const editorOptions = {
    selectOnLineNumbers: true, // Enable selecting entire lines by clicking line numbers.
  };

  return (
    <div style={CodeEditorStyle}>
      {/* Render the Monaco editor */}
      <Editor
        height="500px"
        selectlang={selectlang}
        defaultValue=""
        theme="vs-dark"
        onMount={handleEditorDidMount}
        options={editorOptions}
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
