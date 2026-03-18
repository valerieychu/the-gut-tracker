import React from "react";
import "../styles/global.less";
import "../styles/home.less";
import image from "../images/valeriechu.png";
import divider from "../images/divider.svg";
import Header from "./header";
import Footer from "./footer";
import aetchome from "../images/aetchome.png";
import blobblue from "../images/blobblue.png";
import blobgreen from "../images/blobgreen.png";
import blobpink from "../images/blobpink.png";
import arrowdown from "../images/arrowdown.png";

const Home = () => {
  return (
    <>
      <div className="intro">
        <div className="centered-text">
          {/* So that the blobs can go behind everything */}
          <div className="blob">
            <h1 className="h0">
              The
              <br />
              Gut
              <br />
              Tracker.
            </h1>
            {/* <h1 className="h0">Gut</h1>
          <h1 className="h0">Tracker</h1> */}
            <h2 className="h05">Capturing what's currently under digestion.</h2>

            <img src={blobpink} alt="A pink blob." className="pink-blob" />
            <img src={blobblue} alt="A blue blob." className="blue-blob" />
            <img src={blobgreen} alt="A green blob." className="green-blob" />
          </div>
          <br></br>
          <img src={arrowdown} alt="A down arrow." />
          <br></br>
          <h3 className="h3">
            Note: This project was started in January 2026. It's very much still
            currently under digestion.
          </h3>
        </div>
      </div>
    </>
  );
};

export default Home;
