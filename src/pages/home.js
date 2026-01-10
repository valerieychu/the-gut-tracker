import React from "react";
import "../styles/global.less";
import "../styles/home.less";
import image from "../images/valeriechu.png";
import divider from "../images/divider.svg";
import Header from "./header";
import Footer from "./footer";
import valerie11x11 from "../images/valerie11x11.jpeg";
import valerie80x120 from "../images/valerie80x120.jpeg";
import valeriecamera from "../images/valeriecamera.jpeg";
import valeriegoddard from "../images/valeriegoddard.jpeg";
import valeriesfchronicle from "../images/valeriesfchronicle.jpeg";
import valeriewhitehouse from "../images/valeriewhitehouse.jpeg";
import valeriegoldstone from "../images/valeriegoldstone.jpeg";
import valeriemirror from "../images/valeriechumirror.jpg";
import ProjectCard from "./projectcard";
import aetccometestwithus from "../images/aetccometestwithus.jpg";
import aetccomeworkwithus from "../images/aetccomeworkwithus.jpg";
import aetcctwuform from "../images/aetcctwuform.png";
import aetccwwuform from "../images/aetccwwuform.png";
import sfchroniclehome from "../images/sfchroniclehome.png";
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
          <h1 className="h1">The</h1>
          <h1 className="h1">Gut</h1>
          <h1 className="h1">Tracker</h1>
          <h2 className="h2">A very slay tracker for digestive health, yay!</h2>
          <img src={blobblue} alt="A blue blob." />
          <img src={blobgreen} alt="A green blob." />
          <img src={blobpink} alt="A pink blob." />
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

// Old Version
// const Home = () => {
//   return (
//     <>
//       {/* <Header /> */}
//       {/* Intro */}
//       {/* Intro */}
//       {/* Intro */}
//       <div className="intro">
//         <div className="centered-text">
//           <h1 className="h1" style={{ marginBottom: "1rem" }}>
//             Welcome to The Gut Tracker!
//           </h1>
//           <h2 className="h2">
//             <span
//               className="heart"
//               style={{ color: "#b76e79", fontSize: "16px" }}
//             >
//               &#9829;
//             </span>{" "}
//             Yay!{" "}
//             <span
//               className="heart"
//               style={{ color: "#b76e79", fontSize: "16px" }}
//             >
//               &#9829;
//             </span>
//           </h2>
//           <h2 className="paragraph" style={{ margin: "1rem 0" }}>
//             {/* <em>~ Creating digital products that tell a story ~</em> */}
//           </h2>
//         </div>
//         {/* <img className='image' src={image} alt='Image of Valerie Chu' /> */}
//       </div>

//       <img src={divider} alt="divider" className="divider" />
//       <div className="centered-text">
//         <h3 className="h3">A Quick Intro</h3>
//         <p className="paragraph">Hello hello! Welcome to The Gut Tracker!</p>
//         {/* <p className="paragraph">Hello hello!</p> */}
//       </div>

//       <img src={divider} alt="divider" className="divider" />

//       <div className="centered-text">
//         <h3 className="h3">How to use The Gut Tracker</h3>
//         {/* <ProjectCard
//           image={aetchome}
//           alt="NASA Aerosciences Evaluation and Test Capabilities Portfolio Office home page"
//           hed="NASA Wind Tunnel Test Tracking Project"
//           subhed="NASA’s Aerosciences Evaluation and Test Capabilities Portfolio Office"
//           description="Full stack development and data science for tracking NASA’s wind tunnel tests — Built a landing page that updates with real-time issues, highlights, and data visualizations for NASA’s 12 wind tunnels."
//           skills="Python, Figma, SQL, GitLab, Dash Mantine Components, Dash Plotly"
//           learnMoreUrl="/work/nasa-wind-tunnel-test-tracking"
//           // viewProjectUrl='https://www.nasa.gov/directorates/armd/aetc/'
//         /> */}
//       </div>
//     </>
//   );
// };

// export default Home;
