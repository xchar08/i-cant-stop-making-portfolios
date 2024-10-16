// src/components/Box.js
import React from "react";

function Box({ bgColor, text, style }) {
  return (
    <div
      className={`absolute ${bgColor} flex items-center justify-center text-white rounded-lg`}
      style={style}
    >
      {text}
    </div>
  );
}

export default Box;
