import React from "react";
import "./styles/home.scss";
import Navbar from "./components/Navbar";
import Header from "./components/Header";
import About from "./components/About";
import Work from "./components/Work";
// import locomotiveScroll from "locomotive-scroll";

function App() {
  // const scrollRef = React.createRef();

  // useEffect(() => {
  //   const scroll = new locomotiveScroll({
  //     el: scrollRef.current,
  //     smooth: true,
  //   });
  // });
  return (
    <div className="App">
      <Navbar />
      <Header />
      <About />
      <Work />
    </div>
  );
}

export default App;
