import React from "react";

function StyledBox({ style }) {
  return (
    <div
      className="absolute flex flex-col items-start justify-start text-black rounded-lg"
      style={{
        ...style,
        fontFamily: "'Serif', sans-serif",
        padding: "1.5rem",
        position: "absolute",
        borderRadius: "10px",
      }}
    >
      {/* Header with arrow icon */}
      <div className="flex justify-between items-center" style={{ width: "100%" }}>
        <div style={{ fontSize: "20px", fontWeight: "bold" }}>First Dance</div>
        <div style={{ fontSize: "20px", fontWeight: "bold" }}>↗</div> {/* Arrow icon */}
      </div>

      {/* Image Placeholder */}
      <div
        style={{
          width: "100%",
          height: "auto",
          marginTop: "1rem",
          backgroundImage: "url('https://via.placeholder.com/300x200')", // Placeholder image
          backgroundSize: "cover",
          borderRadius: "10px",
          aspectRatio: "16/9",
        }}
      />

      {/* List of Items */}
      <div style={{ marginTop: "1.5rem", width: "100%" }}>
        <div
          style={{
            paddingBottom: "1rem",
            borderBottom: "1px solid black",
            fontSize: "16px",
          }}
        >
          Cocktail Hour
        </div>
        <div
          style={{
            paddingBottom: "1rem",
            borderBottom: "1px solid black",
            fontSize: "16px",
          }}
        >
          Dinner Music
        </div>
        <div style={{ paddingBottom: "1rem", fontSize: "16px" }}>
          After Party
        </div>
      </div>
    </div>
  );
}

export default StyledBox;
