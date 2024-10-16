import React from "react";

function ContactBox({ style }) {
  return (
    <div
      className="absolute flex flex-col justify-between text-white rounded-lg"
      style={{
        ...style,
        fontFamily: "'Serif', sans-serif",
        padding: "1.5rem",
        borderRadius: "10px",
        color: "#e5e5e5", // Light text color
      }}
    >
      {/* Top Section */}
      <div className="flex justify-between items-start" style={{ width: "100%" }}>
        <div style={{ fontSize: "14px" }}>Have some questions?</div>
        <div style={{ fontSize: "20px" }}>↗</div> {/* Arrow icon */}
      </div>

      {/* Bottom Section */}
      <div style={{ marginTop: "auto", fontSize: "24px", fontWeight: "bold" }}>
        Contact <span style={{ fontStyle: "italic" }}>me</span>
      </div>
    </div>
  );
}

export default ContactBox;
