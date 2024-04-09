import React from "react";

const Header = () => {
  return (
    <header className="header">
      <script src="https://cdn.lordicon.com/lordicon.js"></script>
      <lord-icon
        src="https://cdn.lordicon.com/bmlkvhui.json"
        trigger="hover"
        style={{ width: "70px", height: "60px" }}
      ></lord-icon>
      <h2 className="header--title">Meme Generator</h2>
    </header>
  );
};
export default Header;
