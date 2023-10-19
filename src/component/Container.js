import React from 'react'
import NavBar from './NavBar'
import CodeEditor from './CodeEditor'

const Container = () => {
  return (
    <div style={ContainerStyle}>
      <NavBar/>
      <CodeEditor/>
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
