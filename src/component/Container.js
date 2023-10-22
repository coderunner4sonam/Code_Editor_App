import React, { useState } from 'react'
import NavBar from './NavBar'
import CodeEditor from './CodeEditor'

const Container = () => {
  const [languages, setLanguages] = useState(["select a language","javascript","python","c++","c","java"]);
  const [selectlang, setSelectLang] = useState("");
  const [codeToCopy, setCodeToCopy] = useState("");

  return (
    <div style={ContainerStyle}>
      <NavBar languages={languages} setSelectLang={setSelectLang} codeToCopy={codeToCopy} setCodeToCopy={setCodeToCopy}/>
      <CodeEditor selectlang={selectlang} />
    </div>
  )
}

const ContainerStyle = {
    width:"100%",
    height:"100%",
    border:"1px solid purple"
  }
  
const NavBarStyle = {
    width:"100%",
    height:"10%",
    border:"1px solid red"
}
export default Container
