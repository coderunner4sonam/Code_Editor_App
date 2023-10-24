import React, { useRef } from "react";
import Editor from "@monaco-editor/react";

const CodeEdittwo = () => {
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

  // Configuration options for the Monaco Editor.
  const editorOptions = {
    selectOnLineNumbers: true, // Enable selecting entire lines by clicking line numbers.
  };

  return (
    <div>
      <Editor
        height="500px"
        defaultLanguage="javascript"
        defaultValue=""
        theme="vs-dark"
        onMount={handleEditorDidMount}
        options={editorOptions}
      />

      <button onClick={handleCopyToClipboard} style={CopyStyle}>Copy to Clipboard</button>
    </div>
  );
};

const CopyStyle = {
  backgroundColor: "vs-dark"
}

export default CodeEdittwo;
