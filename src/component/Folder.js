import React from 'react';
import { useState } from 'react';
import {usetraverseData} from '../hooks/usetraverseData';

// Folder component to display a hierarchical folder structure
function Folder({ explorer, explorerData , setExplorerData}) {
  // State variables to manage folder expansion and item creation
  const [expand, setExpand] = useState(false);
  const [createItemsFolder, setCreateItemsFolder] = useState(false);
  const [createItemsFile, setCreateItemsFile] = useState(false);
  const insert = usetraverseData();
  console.log(insert)
  // Function to handle folder creation button click
  function handleFolder(e) {
    e.stopPropagation();
    setCreateItemsFolder(!createItemsFolder);
  }

  // Function to handle file creation button click
  function handleFile(e) {
    e.stopPropagation();
    setCreateItemsFile(!createItemsFile);
  }

  // Function to handle folder name input
  function handleFolderInput(e) {

    e.stopPropagation();
    if(e.keyCode === 13 && e.target.value){
      setExplorerData(insert(explorer, e.target.value, true, explorer.id));
    }
  }

  // Function to handle file name input
  function handleFileInput(e) {
    e.stopPropagation();
  }

  // Render a file if the explorer is not a folder
  if (!explorer.isFolder) {
    return (
      <div style={{ paddingLeft: "25px", marginTop: "10px" }}>
        🗄{explorer.name}
      </div>
    );
  }

  // Render a folder
  return (
    <div style={{ paddingLeft: "10px", marginTop: "10px" }}>
      <div
        onClick={() => setExpand(!expand)}
        style={{ cursor: "pointer", display: "flex", gap: "40px" }}
      >
        <div>📁{explorer.name}</div>
        <div>
          <button
            onClick={(e) => handleFolder(e)}
            style={{ cursor: "pointer" }}
          >
            📁+
          </button>
          <button onClick={(e) => handleFile(e)} style={{ cursor: "pointer" }}>
            🗄+
          </button>
        </div>
      </div>

      {/* Render input field for folder creation if createItemsFolder is true */}
      {createItemsFolder && (
        <div style={{paddingLeft: "5px",marginTop: "5px" }}>
          📁
          <input
            type="text"
            autoFocus
            onBlur={(e) => handleFolder(e)}
            onKeyDown={handleFolderInput}
            placeholder="folder name"
          />
        </div>
      )}

      {/* Render input field for file creation if createItemsFile is true */}
      {createItemsFile && (
        <div style={{paddingLeft: "5px",marginTop: "5px"}}>
          <span>🗄</span>
          <input
            type="text"
            autoFocus
            onBlur={(e) => handleFile(e)}
            onKeyDown={handleFileInput}
            placeholder="file name"
          />
        </div>
      )}

      {/* Recursively expand and render child folders if 'expand' is true and 'explorer.items' exists */}
      {expand && explorer.items?.map((exp, ind) => <Folder explorer={exp} />)}
    </div>
  );
}

export default Folder; // Export the Folder component
