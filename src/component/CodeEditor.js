import React, { useState } from 'react'

const blue = ["function", "let", "var", "const", "for"];

const CodeEditor = () => {
  const [inputText, setInputText] = useState("");
  const [input, setInput] = useState("");

  function handleInput(e) {
    const text = e.target.value;
    const textContent = text.split(" ").map((ele)=>{
      if(blue.includes(ele)){
        return <span className="blueColor">{ele + " "}</span>
      }
      
      return <span>{ele + " "}</span>
    }) 
    setInputText(textContent);
  }
 
  
  function handleEnter(e){
    
    const text = e.target.value;
    if(e.key === "Enter"){

      setInputText([...inputText, <br/>])
    }
  }
 


  return (
    <div style={CodeEditorStyle}>
      <div style={colorInputStyle}>{inputText}</div>
      <textarea type='text'  onChange={handleInput} onKeyDown={handleEnter} placeholder='type code here' style={CodeEditorInputStyle} spellCheck="none"/>
    
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
