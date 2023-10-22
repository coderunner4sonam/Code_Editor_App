import React, { useState } from "react";
import Folder from "./Folder";

// Sample data representing the file and folder structure
const data = [
  {
    id: "1",
    name: "root",
    isFolder: true,
    items: [
      {
        id: "1",
        name: "src",
        isFolder: true,
        items: [],
      },
      {
        id: "2",
        name: "App.js",
        isFolder: false,
        items: [],
      },
    ],
  },
];

// Explorer component to render the file and folder structure
const Explorer = () => {
  // State to store the explorer data
  const [explorerData, setExplorerData] = useState(data);

  return (
    <div>
      {/* Map through the explorer data and render Folder components for each entry */}
      {explorerData.map((exp, ind) => (
        <Folder
          explorer={exp}
          key={exp.id}
          explorerData={explorerData}
          setExplorerData={setExplorerData}
        />
      ))}
    </div>
  );
};

export default Explorer; // Export the Explorer component
