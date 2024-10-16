// src/components/Header.js
import React from "react";

function Header({ title }) {
  return (
    <div className="w-full h-20 bg-blue-500 mb-2.5 flex items-center justify-center rounded-lg">
      <h1 className="text-white text-xl">{title}</h1>
    </div>
  );
}

export default Header;
