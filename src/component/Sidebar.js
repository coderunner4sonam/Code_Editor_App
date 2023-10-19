import React from 'react'

const Sidebar = () => {
  return (
    <div style={SidebarStyle}>
      <div style={OptionStyle}>Explorer</div>
      <div style={OptionStyle}>Folder</div>
    </div>
  )
}

const SidebarStyle = {
  width:"30%",
  height:"100%",
  border:"1px solid black"
}

const OptionStyle = {
  width:"30%",
  height:"20%",
  border:"1px solid red"
}

export default Sidebar
