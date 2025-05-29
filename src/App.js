import React from "react";
import StarBackground from "./components/StarBackground";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
function App() {
  return (
    <>
      <StarBackground />
      <div style={{ position: "relative", zIndex: 1, padding: "2rem" }}>
       <Navbar />
        <Home />
      </div>
    </>
  );
}

export default App;
