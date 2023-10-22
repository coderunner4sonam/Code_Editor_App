import React, { useState } from 'react';

// FileNavbar component to display a list of files
const FileNavbar = () => {
    // State to store the list of file names
    const [navData, setNavData] = useState(["index.js", "index.java"]);

    return (
        <div style={FileNavbarParentStyle}>
            {/* Map through the file names and render them in styled div elements */}
            {navData.map((filename, ind) => (
                <div key={ind} style={FileNavbarStyle}>
                    {filename}
                </div>
            ))}
        </div>
    );
}

// Style for the parent container of the file names
const FileNavbarParentStyle = {
    display: "flex", // Display the file names in a flex container
    justifyContent: "space-evenly", // Space evenly between elements
    alignItems: "center", // Center content vertically
    backgroundColor: "black", // Set the background color to black
    padding: "2px", // Add padding
    boxShadow: "0 2px 4px rgba(0, 0, 0, 0.2)", // Add a subtle shadow
};

// Style for individual file name elements
const FileNavbarStyle = {
    border: "0.5"
}