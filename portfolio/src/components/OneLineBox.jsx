import React from "react";

function OneLineBox({ style }) {
  return (
    <div
      className="relative text-black"
      style={{
        ...style,
        fontFamily: "'Playfair Display', serif", // Font for main text
        padding: "2rem",
        position: "absolute", // Parent needs to be relative for proper positioning
        borderRadius: "0.5rem"
      }}
    >
      {/* Decorative Pattern in the Top Right */}
      <div
        style={{
          position: "absolute",
          top: "20px", // Adjust as needed
          right: "20px", // Adjust as needed
          width: "80px",
          height: "80px",
          backgroundImage: "url('https://via.placeholder.com/80')", // Placeholder image
          backgroundSize: "contain",
          backgroundRepeat: "no-repeat",
        }}
      />

      {/* Text Content at Bottom Left */}
      <div
        style={{
          fontSize: "3rem",
          lineHeight: "1.2",
          position: "absolute",
          bottom: "20px", // Position text near the bottom-left
          left: "20px",   // Position text near the left
          maxWidth: "60%", // Prevent text from stretching too far
        }}
      >
        Let’s create dance floor{" "}
        <span style={{ fontStyle: "italic", fontFamily: "'Dancing Script', cursive" }}>
          magic
        </span>{" "}
        for your special day
      </div>
    </div>
  );
}

export default OneLineBox;
