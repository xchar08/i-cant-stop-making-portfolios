// src/App.js
import React from "react";
import Header from "./components/Header";
import Box from "./components/Box";

function App() {
  return (
    <div className="w-screen h-screen bg-gray-100 p-4">
      {/* Header */}
      <Header title="Header" />

      {/* Main Content */}
      <div className="relative w-full h-full">
        {/* Box 1: 9.5 x 6.5 */}
        <Box
          bgColor="bg-red-500"
          text="Box 1"
          style={{
            width: "41%", // Unchanged
            height: "56.25%", // Unchanged
            left: "0%", // Unchanged
            top: "1.5%", // Unchanged
          }}
        />

        {/* Box 2: 4.5 x 6.5 */}
        <Box
          bgColor="bg-green-500"
          text="Box 2"
          style={{
            width: "23%",
            height: "56.25%",
            left: "43%",
            top: "1.5%",
          }}
        />

        {/* Adjusted Box 3: 7 x 11.5 */}
        <Box
          bgColor="bg-yellow-500"
          text="Box 3"
          style={{
            width: "32%",
            height: "80%",
            left: "68%",
            top: "1.5%",
          }}
        />

        {/* Box 4: 7 x 7.5 */}
        <Box
          bgColor="bg-purple-500"
          text="Box 4"
          style={{
            width: "32%",
            height: "38.5%",
            left: "0%",
            top: "61%",
          }}
        />

        {/* Adjusted Box 5: 7 x 7.5 */}
        <Box
          bgColor="bg-pink-500"
          text="Box 5"
          style={{
            width: "32%",
            height: "38.5%",
            left: "34%",
            top: "61%",
          }}
        />

        {/* Adjusted Box 6: Moved and Resized */}
        <Box
          bgColor="bg-orange-500"
          text="Box 6"
          style={{
            width: "32%",
            height: "14.5%",
            left: "68%",
            top: "85%",
          }}
        />
      </div>
    </div>
  );
}

export default App;
