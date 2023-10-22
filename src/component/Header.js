import React from 'react';

// Header component to display a simple header
const Header = () => {
  return (
    <div style={HeaderStyle}>
      Header
    </div>
  );
}

// Style for the Header component
const HeaderStyle = {
  height: "10vh", // Set the height to 10% of the viewport height
  border: "1px solid black", // Add a border with a black color
};

export default Header; // Export the Header component
