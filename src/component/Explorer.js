import React, { useState } from "react";
import Folder from "./Folder";

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

const Explorer = () => {
    const [explorerData, setExplorerData] = useState(data);
        
    return (
        <div>
            {
                explorerData.map((exp,ind)=>(
                    <Folder explorer={exp}/>
                ))
            }
        </div>
    );
};

export default Explorer;
