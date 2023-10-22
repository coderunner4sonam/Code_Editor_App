import React, { useRef, useState } from "react";

const NavBar = ({
  languages,
  setSelectLang,
  codeToCopy,
  setCodeToCopy,
  setLocked
}) => {
  const editorRef = useRef(null);

  function handleLanguage(e) {
    setSelectLang(e.target.value);
  }

  const handleCopyToClipboard = () => {
    if (editorRef.current) {
      const codeText = editorRef.current.getValue();
      console.log("Code Text:", codeText);
    }
  };

  return (
    <div style={NavBarStyle}>
      {/* dropdown */}
      <div>
        <select onClick={handleLanguage}>
          {languages.map((lan, ind) => (
            <option>{lan}</option>
          ))}
        </select>
      </div>
      <div>
        <button onClick={handleCopyToClipboard}>Copy</button>
      </div>
      <div>
        <button onClick={()=>setLocked(true)}>Lock/unLock</button>
      </div>

      <div>
        <button>Save</button>
      </div>
    </div>
  );
};

const NavBarStyle = {
  width: "100%",
  height: "10%",
  border: "1px solid red",
  display: "flex",
  justifyContent: "space-around",
  alignItems: "center",
};

export default NavBar;
