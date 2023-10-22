import React from 'react';
import Explorer from './Explorer';

// Sidebar component to display navigation options
const Sidebar = () => {
  return (
    <div style={SidebarStyle}>
      {/* Option to explore files and directories */}
      <div style={OptionStyle}>Explorer</div>
      <Explorer /> {/* Render the Explorer component */}
    </div>
  );
}

// Style for the Sidebar component
const SidebarStyle = {
  width: "25%", // Set the width to 25% of the parent container
  height: "100%", // Set the height to 100% of the parent container
  border: "1px solid black", // Add a black border
};

// Style for the option (e.g., "Explorer") within the Sidebar
const OptionStyle = {
  width: "100%",
  height: "10%",
  border: "1px solid red", // Add a red border
};

export default Sidebar; // Export the Sidebar component

