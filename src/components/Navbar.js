import React from "react";

const Navbar = () => {
  return (
    <div className="navbar">
      <span
        onClick={() => {
          window.location.reload();
        }}
      >
        VACCINE FINDER
      </span>
    </div>
  );
};

export default Navbar;
