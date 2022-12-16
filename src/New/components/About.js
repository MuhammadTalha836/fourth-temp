import React from 'react'
import "../style/about.scss"
import img from "../images/about-img.png"
import { VscBellDot } from "react-icons/vsc"
function About() {
  return (
    // here is about section
    <div className="container about" id='about'>
      {/* this is about header */}
      <div className="row my-5">
        <div className="col text-center">
          <p>Our Future</p>
          <h2>Grow up your business</h2>
        </div>
      </div>
      {/* this is row of all cards section */}
      <div className="row d-flex justify-content-center align-items-center">
        {/* this is single card of about section */}
        <div className="col-12 col-md-4 mb-3">
          <div className="card">
            <img src={img} className="card-img-top img-fluid" style={{ height: "400px" }} alt="..." />
            <div className="card-body p-4 bg-light">
              <VscBellDot size="40px" style={{ color: "#FF5421" }} />
              <h5 className="card-title mt-3">Search Engines</h5>
              <p className="card-text">This should be used to tell a story and let users know more about your service. How can you benefit them?</p>

            </div>
          </div>
        </div>

        {/* this is single card of about section */}
        <div className="col-12 col-md-4 mb-3">
          <div className="card" >
            <img src={img} className="card-img-top img-fluid" style={{ height: "400px" }} alt="..." />
            <div className="card-body p-4 bg-light">
              <VscBellDot size="40px" style={{ color: "#FF5421" }} />
              <h5 className="card-title mt-3">Search Engines</h5>
              <p className="card-text">This should be used to tell a story and let users know more about your service. How can you benefit them?</p>

            </div>
          </div>
        </div>

        {/* this is single card of about section */}
        <div className="col-12 col-md-4 mb-3">
          <div className="card" >
            <img src={img} className="card-img-top img-fluid" style={{ height: "400px" }} alt="..." />
            <div className="card-body p-4 bg-light">
              <VscBellDot size="40px" style={{ color: "#FF5421" }} />
              <h5 className="card-title mt-3">Search Engines</h5>
              <p className="card-text">This should be used to tell a story and let users know more about your service. How can you benefit them?</p>

            </div>
          </div>
        </div>
      </div>

      {/* this is about footer content */}
      <div className="row my-3">
        <div className="col text-center">
          <p>We provide new ways to manage your businesses: <a style={{ color: "#FF5421", cursor: "pointer" }}> Request Your Quote </a></p>
        </div>
      </div>
    </div>
  )
}

export default About