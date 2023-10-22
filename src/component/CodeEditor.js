import Editor from "@monaco-editor/react";
import { useRef } from "react";

const CodeEditor = ({ selectlang, locked }) => {
  const editorRef = useRef(null);

  console.log(locked)
  return (
    <div style={CodeEditorStyle}>
      {locked && <div style={LockedStyle}> 🔑Locked </div>}
      <Editor
        height="99%"
        width="99.5%"
        theme="vs-dark"
        language={selectlang}
        onMount={(editor) => {
          editorRef.current = editor; // Store a reference to the editor instance
        }}
      />
    </div>
  );
};

const CodeEditorStyle = {
  width: "99.5%",
  height: "89.2%",
  border: "1px solid green",
  backgoundColor: "black",
};

const LockedStyle = {
  position: "absolute",
  top: "0",
  left: "0",
  width: "99%",
  height: "99%",
  color: "white",
  backgoundColor: "transparent",
  textAlign: "center",
  border: "1px solid green",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  zIndex: 2,
};

export default CodeEditor;
