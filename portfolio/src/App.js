import React, { useState } from "react";
import Header from "./components/Header";
import OneLineBox from "./components/OneLineBox"; // Box #1
import ImageBox from "./components/ImageBox"; // Box #2
import StyledBox from "./components/StyledBox"; // Box #3
import DescriptionBox from "./components/DescriptionBox"; // Box #4
import ContactBox from "./components/ContactBox"; // Box #5
import SocialMediaBox from "./components/SocialMediaBox"; // Box #6

function App() {
  // Define the themes
  const themes = {
    beige: {
      mainBackground: "#000000",
      textColor: "black",
      boxColor: "#D8CFBC",
      contactBoxColor: "#565449",
      lineColor: "#333",
    },
    pink: {
      mainBackground: "white",
      textColor: "black",
      boxColor: "#FADCD9",
      contactBoxColor: "#F8AFA6",
      lineColor: "#F8AFA6",
    },
    black: {
      mainBackground: "#171717",
      textColor: "white",
      boxColor: "black",
      contactBoxColor: "#5C5C5A",
      lineColor: "white",
    },
  };

  // Theme state to manage the current theme
  const [theme, setTheme] = useState(themes.beige);

  return (
    <div
      className="min-h-screen flex flex-col"
      style={{ backgroundColor: theme.mainBackground, color: theme.textColor, padding: "20px"}}
    >
      {/* Header with the theme switcher */}
      <div
        style={{
          backgroundColor: theme.boxColor,
          padding: "1rem",
          borderRadius: "10px",
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        {/* Grouping the name and the circles */}
        <div style={{ display: "flex", alignItems: "center", gap: "20px" }}>
          {/* Header Name with dynamic color */}
          <div style={{ fontSize: "24px", fontWeight: "bold", color: theme.textColor }}>
            DJ <span style={{ fontStyle: "italic" }}>LISA</span>
          </div>

          {/* Theme switcher (circles) directly next to the name */}
          <div style={{ display: "flex", gap: "10px" }}>
            {/* Beige Theme Circle */}
            <div
              onClick={() => setTheme(themes.beige)}
              style={{
                width: "20px",
                height: "20px",
                backgroundColor: "#D8CFBC",
                borderRadius: "50%",
                border: "2px solid black", // Black border for beige circle
                cursor: "pointer",
              }}
            ></div>

            {/* Pink Theme Circle */}
            <div
              onClick={() => setTheme(themes.pink)}
              style={{
                width: "20px",
                height: "20px",
                backgroundColor: "#FADCD9",
                borderRadius: "50%",
                border: "2px solid white", // White border for pink circle
                cursor: "pointer",
              }}
            ></div>

            {/* Black Theme Circle */}
            <div
              onClick={() => setTheme(themes.black)}
              style={{
                width: "20px",
                height: "20px",
                backgroundColor: "black",
                borderRadius: "50%",
                border: "2px solid white", // White border for black circle
                cursor: "pointer",
              }}
            ></div>
          </div>
        </div>

        {/* Right side navigation links */}
        <div style={{ display: "flex", gap: "20px", fontSize: "16px" }}>
          <a href="#about" style={{ textDecoration: "none", color: theme.textColor }}>ABOUT</a>
          <a href="#weddings" style={{ textDecoration: "none", color: theme.textColor }}>WEDDINGS</a>
          <a href="#contact" style={{ textDecoration: "none", color: theme.textColor }}>CONTACT</a>
        </div>
      </div>

      {/* Main Content */}
      <div className="relative flex-grow w-full">
        {/* OneLineBox for Box 1 */}
        <OneLineBox
          style={{
            width: "41%",
            height: "56.25%",
            left: "0%",
            top: "1.5%",
            backgroundColor: theme.boxColor,
            color: theme.textColor,
            position: "absolute", // Reinstate position logic with top and left
          }}
        />

        {/* ImageBox for Box 2 */}
        <ImageBox
          style={{
            width: "23%",
            height: "56.25%",
            left: "43%",
            top: "1.5%",
            backgroundColor: theme.boxColor,
            color: theme.textColor,
            position: "absolute", // Reinstate position logic with top and left
          }}
        />

        {/* StyledBox for Box 3 */}
        <StyledBox
          style={{
            width: "32%",
            height: "80%",
            left: "68%",
            top: "1.5%",
            backgroundColor: theme.boxColor,
            color: theme.textColor,
            position: "absolute", // Reinstate position logic with top and left
            borderBottom: "none", // No border for StyledBox
          }}
        />

        {/* DescriptionBox for Box 4 */}
        <DescriptionBox
          style={{
            width: "32%",
            height: "38.5%",
            left: "0%",
            top: "61%",
            backgroundColor: theme.boxColor,
            color: theme.textColor,
            position: "absolute", // Reinstate position logic with top and left
          }}
        />

        {/* ContactBox for Box 5 */}
        <ContactBox
          style={{
            width: "32%",
            height: "38.5%",
            left: "34%",
            top: "61%",
            backgroundColor: theme.contactBoxColor,
            color: theme.textColor,
            position: "absolute", // Reinstate position logic with top and left
          }}
        />

        {/* SocialMediaBox for Box 6 */}
        <SocialMediaBox
          style={{
            width: "32%",
            height: "14.5%",
            left: "68%",
            top: "85%",
            backgroundColor: theme.boxColor,
            color: theme.textColor,
            position: "absolute", // Reinstate position logic with top and left
          }}
        />
      </div>
    </div>
  );
}

export default App;
