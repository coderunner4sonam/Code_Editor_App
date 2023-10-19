import React from 'react'
import Sidebar from './Sidebar'
import NavBar from './NavBar'
import Container from './Container'

const MainBody = () => {
  return (
    <div style={MainBodyStyle}>
      <Sidebar/>
      
      <Container/>
    </div>
  )
}

const MainBodyStyle = {
  width:"99.9vw",
  height:"89vh",
  display:"flex",
  justifyContent:"space-around",
  alignItems:"center"
}

export default MainBody
