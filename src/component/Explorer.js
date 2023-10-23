import React, { useState } from "react";
import Folder from "./Folder";
import usetraverseData from "../hooks/usetraverseData";
import {data} from "../Data/FolderData"

// Explorer component to render the file and folder structure
const Explorer = () => {
  // State to store the explorer data
  const [explorerData, setExplorerData] = useState(data);
  const { insert } = usetraverseData();

  function handleInsertItem(id, name, isFolder) {
    const finalData = insert(explorerData, name, isFolder, id);
    setExplorerData(finalData);
  }
  console.log(explorerData);
  return (
    <div>
      <Folder handleInsertItem={handleInsertItem} explorer={explorerData} />
    </div>
  );
};

export default Explorer; // Export the Explorer component
