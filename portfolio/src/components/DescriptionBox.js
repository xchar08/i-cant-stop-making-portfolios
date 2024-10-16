import React from "react";

function DescriptionBox({ style }) {
  return (
    <div
      className="absolute flex flex-col justify-start text-black rounded-lg"
      style={{
        ...style,
        fontFamily: "'Sans-serif', serif",
        padding: "2rem",
        borderRadius: "10px",
      }}
    >
      {/* Placeholder design image */}
      <div
        style={{
          width: "50px",
          height: "50px",
          backgroundImage: "url('https://via.placeholder.com/50')", // Placeholder image for the icon
          backgroundSize: "cover",
          borderRadius: "50%",
          marginBottom: "1.5rem", // space between image and text
        }}
      />

      {/* Descriptive text */}
      <p style={{ fontSize: "16px", lineHeight: "1.6", color: "#333" }}>
        DJ Lisa is a passionate wedding DJ, acclaimed for blending diverse musical genres with expert crowd-reading skills. Based in Florida, she crafts personalized soundtracks that turn every wedding into an unforgettable celebration.
      </p>
    </div>
  );
}

export default DescriptionBox;
