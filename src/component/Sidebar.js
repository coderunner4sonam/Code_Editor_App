// import React from 'react';
// import Explorer from './Explorer';

// // Sidebar component to display navigation options
// const Sidebar = () => {
//   return (
//     <div style={SidebarStyle}>
//       {/* Option to explore files and directories */}
//       <div style={OptionStyle}>Explorer</div>
//       <Explorer /> {/* Render the Explorer component */}
//     </div>
//   );
// }

// // Style for the Sidebar component
// const SidebarStyle = {
//   width: "20%", // Set the width to 25% of the parent container
//   height: "100%", // Set the height to 100% of the parent container
//   border: "1px solid black", // Add a black border
// };

// // Style for the option (e.g., "Explorer") within the Sidebar
// const OptionStyle = {
//   width: "100%",
//   height: "10%",
//   border: "1px solid red", // Add a red border
// };

// export default Sidebar; // Export the Sidebar component

import React from 'react';
import Explorer from './Explorer';

const Sidebar = () => {
  return (
    <div style={SidebarStyle}>
      <div style={OptionStyle}>Explorer</div>
      <Explorer />
    </div>
  );
}

const SidebarStyle = {
  width: "20%",
  height: "100%",
  background: "#f0f0f0", // Light background color
  border: "1px solid #ddd", // Light gray border
  boxShadow: "2px 0px 5px rgba(0, 0, 0, 0.1)", // Subtle shadow on the right
};

const OptionStyle = {
  width: "93.5%",
  height: "10%",
  background: "#007BFF", // Blue background color
  color: "white", // White text color
  display: "flex",
  alignItems: "center",
  paddingLeft: "20px", // Add left padding
  fontSize: "18px", // Larger font size
  fontWeight: "bold", // Bold text
};

export default Sidebar;
