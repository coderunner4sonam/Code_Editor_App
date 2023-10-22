import React from 'react';
import Sidebar from './Sidebar';
import NavBar from './NavBar';
import Container from './Container';

// MainBody component to display the main content of the application
const MainBody = () => {
  return (
    <div style={MainBodyStyle}>
      <Sidebar /> {/* Render the Sidebar component */}
      <Container /> {/* Render the Container component */}
    </div>
  );
}

// Style for the MainBody component
const MainBodyStyle = {
  width: "99.9vw", // Set the width to 99.9% of the viewport width
  height: "89vh", // Set the height to 89% of the viewport height
  display: "flex", // Display its children in a flex container
  justifyContent: "space-around", // Space elements around horizontally
  alignItems: "center", // Center children vertically
};

export default MainBody; // Export the MainBody component
