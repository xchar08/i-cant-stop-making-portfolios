import React from "react";

function ImageBox({ style }) {
  return (
    <div
      className="absolute"
      style={{
        ...style,
        backgroundImage: "url('https://via.placeholder.com/150')", // Placeholder image
        backgroundSize: "cover",
        backgroundPosition: "center",
        borderRadius: "10px",
      }}
    />
  );
}

export default ImageBox;
