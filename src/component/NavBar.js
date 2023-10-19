import React from "react";

const NavBar = () => {
  return (
    <div style={NavBarStyle}>
      {/* dropdown */}
        <div>
        <select>
          <option>Please choose one option</option>
          <option>Javascript</option>
          <option>Java</option>
          <option>C++</option>
          <option>Python</option>
        </select>
        </div>
        <div>
          <button>Copy</button>
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
  display:"flex",
  justifyContent:"space-around",
  alignItems:"center"
};

export default NavBar;
