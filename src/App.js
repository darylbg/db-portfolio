import React, { useState, useEffect } from "react";
import "./assets/css/Style.css";
import Navbar from "./components/Navbar";
import Home from "./sections/Home";
import About from "./sections/About";
import Experience from "./sections/Experience";
import Projects from "./sections/Projects";
import Footer from "./components/Footer";
import { ArrowUp } from "react-feather";
import Button from "react-bootstrap/Button";
import OverlayTrigger from "react-bootstrap/OverlayTrigger";
import Tooltip from "react-bootstrap/Tooltip";

function App() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    window.addEventListener("scroll", listenToScroll);
    return () => window.removeEventListener("scroll", listenToScroll);
  }, []);

  const listenToScroll = () => {
    let heightToRevealFrom = 400;
    const winScroll =
      document.body.scrollTop || document.documentElement.scrollTop;

    if (winScroll > heightToRevealFrom) {
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }
  };

  const scrollToTop = (e) => {
    e.preventDefault();
    window.scrollTo({ top: "0", behavior: "smooth" });
  };

  return (
    <>
      <Navbar />
      <div className="container">
        <Home />
        <About />
        <Experience />
        <Projects />
        <Footer />
        {isVisible && (
          <OverlayTrigger
            key="top"
            placement="top"
            overlay={<Tooltip id="tooltip-top">Back to top</Tooltip>}
          >
            <Button className="back-to-top" onClick={scrollToTop}>
              <ArrowUp />
            </Button>
          </OverlayTrigger>
        )}
      </div>
    </>
  );
}

export default App;
