import React from "react";

function Header() {
  return (
    <div className="w-full flex items-center justify-between text-black">
      {/* Left side: Title (DJ LISA) */}
      <div style={{ fontSize: "24px", fontWeight: "bold" }}>
        Jeremiah <span style={{ fontStyle: "italic" }}>Pitts</span>
      </div>


    </div>
  );
}

export default Header;
