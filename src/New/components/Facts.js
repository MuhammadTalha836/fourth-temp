import React from 'react'
import { FaReact } from "react-icons/fa"
import "../style/facts.scss";
function Facts() {
  return (
    // here is facts section
    <div className="container-fluid facts my-5" id='facts'>

      {/* this is facts header content */}
      <div className="row">
        <div className="col text-white text-center my-5">
          <p>Some Facts</p>
          <h4 >We always ready for a challenge</h4>
        </div>
      </div>
      <div className="container">
        {/* here is all card of fact section */}
        <div className="row d-flex justify-content-center align-items-center text-center">
          {/* this is a single card data of fact section  */}
          <div className="col-12 col-md-3 mb-4" style={{ width: "300px", }}>
            <div className="card border-0" style={{ backgroundColor: "transparent" }}>
              <div className="row">
                <div className="col fs-1 fw-bold" style={{ color: "#FF5421" }}>
                  <FaReact className='text-white me-3' size="50px" />1035
                </div>
              </div>
              <div className="row mt-2">
                <div className="col text-white">
                  <p className='fs-5'>Clients Satisfaction</p>
                </div>
              </div>
            </div>
          </div>

          {/* this is a single card data of fact section  */}
          <div className="col-12 col-md-3 mb-4" style={{ width: "300px", }}>
            <div className="card border-0" style={{ backgroundColor: "transparent" }}>
              <div className="row">
                <div className="col fs-1 fw-bold" style={{ color: "#FF5421" }}>
                  <FaReact className='text-white me-3' size="50px" />1035
                </div>
              </div>
              <div className="row mt-2">
                <div className="col text-white">
                  <p className='fs-5'>Clients Satisfaction</p>
                </div>
              </div>
            </div>
          </div>

          {/* this is a single card data of fact section  */}
          <div className="col-12 col-md-3 mb-4" style={{ width: "300px", }}>
            <div className="card border-0" style={{ backgroundColor: "transparent" }}>
              <div className="row">
                <div className="col fs-1 fw-bold" style={{ color: "#FF5421" }}>
                  <FaReact className='text-white me-3' size="50px" />1035
                </div>
              </div>
              <div className="row mt-2">
                <div className="col text-white">
                  <p className='fs-5'>Clients Satisfaction</p>
                </div>
              </div>
            </div>
          </div>

          {/* this is a single card data of fact section  */}
          <div className="col-12 col-md-3 mb-4" style={{ width: "300px", }}>
            <div className="card border-0" style={{ backgroundColor: "transparent" }}>
              <div className="row">
                <div className="col fs-1 fw-bold" style={{ color: "#FF5421" }}>
                  <FaReact className='text-white me-3' size="50px" />1035
                </div>
              </div>
              <div className="row mt-2">
                <div className="col text-white">
                  <p className='fs-5'>Clients Satisfaction</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Facts