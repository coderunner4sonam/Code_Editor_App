import React from 'react'
import { useState } from 'react';

function Folder({ explorer }) {
  const [expand, setExpand] = useState(false);
  const [createItemsFolder, setCreateItemsFolder] = useState(false);
  const [createItemsFile, setCreateItemsFile] = useState(false);

  function handleFolder(e){
    e.stopPropagation();
    setCreateItemsFolder(!createItemsFolder);
  }

  function handleFile(e) {
    e.stopPropagation();
    setCreateItemsFile(!createItemsFile)
  }

  function handleFolderInput(e){
    e.stopPropagation();
  }

  function handleFileInput(e){
    e.stopPropagation();
  }

  if(!explorer.isFolder) {
    return (
      <div style={{ paddingLeft: "25px", marginTop: "10px" }}>
        🗄{explorer.name}
      </div>
    );
  }

  return (
    <div style={{ paddingLeft: "25px", marginTop: "10px" }}>
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

      {createItemsFolder && (
        <div style={{ marginLeft: "25px", marginTop: "5px" }}>
          <span>📁</span>
          <input
            type="text"
            autoFocus
            onBlur={(e) => handleFolder(e)}
            onChange={handleFolderInput}
            placeholder="folder name"
          />
        </div>
      )}
      {createItemsFile && (
        <div style={{ marginLeft: "25px", marginTop: "5px" }}>
          <span>🗄</span>
          <input
            type="text"
            autoFocus
            onBlur={(e) => handleFile(e)}
            onChange={handleFileInput}
            placeholder="file name"
          />
        </div>
      )}
      {expand && explorer.items?.map((exp, ind) => <Folder explorer={exp} />)}
    </div>
  );
}

export default Folder;