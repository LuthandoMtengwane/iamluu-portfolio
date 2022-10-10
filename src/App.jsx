import React, { useEffect } from "react";
import "./styles/home.scss";
import Navbar from "./components/Navbar";
import Header from "./components/Header";
import About from "./components/About";
import Work from "./components/Work";
import useLocoScroll from "./hooks/useLocoScroll";
import gsap from "gsap";

function App() {
  useEffect(() => {
    // timeline
    const tl = gsap.timeline();

    tl.from(".create", {
      duration: 1,
      y: 100,
      ease: "power4.out",
      delay: 1,
      skewY: 7,
      stagger: {
        amount: 0.3,
      },
    });
  }, []);

  useLocoScroll();

  return (
    <div className="App" id="app">
      <Navbar />
      <Header />
      <About />
      <Work />
    </div>
  );
}

export default App;
