import React from "react";

const Navbar = () => {
  return (
    <div className="navbar">
      <span
        onClick={() => {
          window.location.reload();
        }}
      >
        Vaccine finder
      </span>
    </div>
  );
};

export default Navbar;
