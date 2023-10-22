import  Editor  from '@monaco-editor/react';
import { useRef } from 'react';

const CodeEditor = ({selectlang}) => {
  const editorRef = useRef(null);
 
  return (
    <div style={CodeEditorStyle}>
      <Editor 
        height="99%"
        width="99.5%"
        theme='vs-dark'
        language={selectlang}
        onMount={(editor) => {
          editorRef.current = editor; // Store a reference to the editor instance
        }}
        />

    </div>
  )
}

const CodeEditorStyle = {
  position: 'relative',
  width:"99.5%",
  height:"89.2%",
  border:"1px solid green",
  backgoundColor:"black",
}

const CodeEditorInputStyle = {
  width:"99.5%",
  height:"99%",
  border:"1px solid red",
  color:"black",
  backgroundColor: 'transparent', // Make the background transparent
  // color: 'transparent',
}

const colorInputStyle = {
  position: "absolute",
  top:"0",
  left:"0",
  width:"99.5%",
  height:"99%",
  border:"1px solid yellow",
  pointerEvents: 'none', // Prevent interaction with the overlay
  zIndex: 1,
  backgroundColor:"black",
  color:"white",
  
}

export default CodeEditor
