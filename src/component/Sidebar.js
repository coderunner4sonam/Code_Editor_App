import React from 'react'
import Explorer from './Explorer'

const Sidebar = () => {
  return (
    <div style={SidebarStyle}>
      <div style={OptionStyle}>Explorer</div>
      <Explorer/>
    </div>
  )
}

const SidebarStyle = {
  width:"25%",
  height:"100%",
  border:"1px solid black"
}

const OptionStyle = {
  width:"100%",
  height:"10%",
  border:"1px solid red"
}

export default Sidebar
