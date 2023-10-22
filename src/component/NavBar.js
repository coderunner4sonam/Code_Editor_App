import React, { useRef } from "react";

const NavBar = ({ languages, setSelectLang, codeToCopy, setCodeToCopy }) => {
  const editorRef = useRef(null);

  function handleLanguage(e) {
    setSelectLang(e.target.value);
  }

  // const handleCopyToClipboard = () => {
  //   const Copy = editorRef.current?.getValue();
  //   if (Copy) {
  //     navigator.clipboard
  //       .writeText(Copy)
  //       .then(() => {
  //         alert("Code copied to clipboard");
  //         console.log("Copied code:", Copy);
  //       })
  //       .catch((error) => {
  //         console.error("Copy failed: ", error);
  //       });
  //   } else {
  //     console.error("Code to copy is undefined");
  //   }
  // };

  // const handleCopyToClipboard = () => {
  //   if (editorRef.current) {
  //     editorRef.current.setSelection(editorRef.current.getPosition(), editorRef.current.getPosition(9999));
  //   }
  // };
  
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
        <button>Lock/unLock</button>
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
