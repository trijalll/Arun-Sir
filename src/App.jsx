import React from "react";
import "./App.css";
import Navbar from "./Navbar";
import { Link, NavLink, Route, Routes } from "react-router-dom";
import homeVid from "./assets/video__home.mp4";
// import Cources from "./Cources";
function App() {
  return (
    <>
    {/* <Routes>
      <Route path="/" element={<App></App>} />
      <Route path="/cources" element={<Cources></Cources>} />
    </Routes> */}
      <div className="main">
        <Navbar></Navbar>
        <div className="part1">
          <div className="part1__cont">
            <h1>Web Development</h1>
            <p>
              Our hands-on experience with the latest technologies enables us to
              maintain an unparalleled success rate.
            </p>
            <div className="part1__feedback">
              <div className="part1__review">
                <div className="part1__review__dp"></div>
                <div className="part1__review__rating">
                  <div className="part1__rating__line"></div>
                  <div className="part1__rating__stars">
                    <i class="ri-star-fill"></i>
                    <i class="ri-star-fill"></i>
                    <i class="ri-star-fill"></i>
                    <i class="ri-star-fill"></i>
                    <i class="ri-star-fill"></i>
                  </div>
                </div>
                <div className="part1__review__add">
                  <i class="ri-add-line"></i>
                </div>
              </div>
              <div className="part1__feedback__button">
                <button className="part1__button">
                  <i class="ri-rocket-fill"></i>
                  <Link to={""} className="part1__button__link">Get Started</Link>
                </button>
              </div>
            </div>
          </div>
          <video
            src={homeVid}
            className="home__video"
            preload="auto"
            autoplay="autoplay"
            loop="loop"
            muted
          ></video>
        </div>
      </div>
    </>
  );
}

export default App;
