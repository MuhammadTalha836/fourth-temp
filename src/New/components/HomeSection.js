import React from 'react'
import "../style/home.scss";
import { CgDigitalocean } from "react-icons/cg"

function HomeSection() {
  return (

    // here is home section
    <div className="container-fluid Home-bg" id='home'>
      <div className="row home-content min-vh-100 d-flex justify-content-center align-items-center">
        {/* this is home header content */}
        <div className='col content mt-5'>
          <p className='fs-5 text-white'>The best in the market</p>
          <h3 className='mb-4'>Online services from leading experts in market</h3>
          <button className='btn px-4 py-3'>Start Your Service</button>
        </div>
      </div>
      <div className="container">

        {/* this is all cards of home section */}
        <div className="row cards  d-flex justify-content-between align-items-center py-5">

          {/* this is single card of home section */}
          <div className="col-12 col-md-4 ">
            <div className="card p-3 mb-2">
              <div className="row">
                <div className="col-2 text-white">
                  <CgDigitalocean size="40px" />
                </div>
                <div className="col-10 text-white">
                  <h3>Data Analysis</h3>
                  <p>This should be used to tell a story and let users know more about your service.</p>
                </div>
              </div>
            </div>
          </div>

          {/* this is single card of home section */}
          <div className="col-12 col-md-4 ">

            <div className="card p-3 mb-2">
              <div className="row">
                <div className="col-2 text-white">
                  <CgDigitalocean size="40px" />
                </div>
                <div className="col-10 text-white">
                  <h3>Data Analysis</h3>
                  <p>This should be used to tell a story and let users know more about your service.</p>
                </div>
              </div>
            </div>
          </div>

          {/* this is single card of home section */}
          <div className="col-12 col-md-4 ">
            <div className="card p-3 mb-2">
              <div className="row">
                <div className="col-2 text-white">
                  <CgDigitalocean size="40px" />
                </div>
                <div className="col-10 text-white">
                  <h3>Data Analysis</h3>
                  <p>This should be used to tell a story and let users know more about your service.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default HomeSection