import React from "react";

function SocialMediaBox({ style }) {
  return (
    <div
      className="absolute flex items-center justify-around text-black rounded-lg"
      style={{
        ...style,
        fontFamily: "'Sans-serif', serif",
        padding: "1.5rem",
        borderRadius: "10px",
        textAlign: "center",
      }}
    >
      {/* Social media names, spaced evenly */}
      <div style={{ fontSize: "16px", fontWeight: "bold" }}>INSTAGRAM</div>
      <div style={{ fontSize: "16px", fontWeight: "bold" }}>TWITTER</div>
      <div style={{ fontSize: "16px", fontWeight: "bold" }}>PINTEREST</div>
    </div>
  );
}

export default SocialMediaBox;
