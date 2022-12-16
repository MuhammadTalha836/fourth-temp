import React from 'react'
import { FaDollarSign } from 'react-icons/fa'
import { TiTick } from "react-icons/ti"
import { RxCross2 } from "react-icons/rx"
function Pricing() {
  return (

    // here is pricing section 
    <div className='py-3' id='pricing'>
      <div className="container">

        {/* this is pricing header content */}
        <div className="row">
          <div className="col text-center">
            <p >Pricing Table </p>
            <h3>Without Hidden Charges</h3>
          </div>
        </div>

        {/* this is all pricing card in this row */}
        <div className="row my-5">
          {/* this is single card of pricing section */}
          <div className="col-12 col-md-4 p-md-2 mb-3">
            <div className="card " >
              <div className="card-body text-dark text-center bg-light py-5" style={{ border: "2px solid white", }}>
                <h5 className="card-title mb-3">-Basic Plan-</h5>

                <h1 className="card-subtitle mb-4 ">
                  <sup><FaDollarSign /></sup> 100
                  <p className='fs-6'>per month</p>
                </h1>
                <hr className='mb-4' />
                <p className="card-text mb-4"><TiTick size="30px" style={{ color: "#FF5421" }} /> - Amazing Features -</p>
                <p className="card-text mb-4"><TiTick size="30px" style={{ color: "#FF5421" }} /> - 4 Gb Storage -</p>
                <p className="card-text mb-4"><TiTick size="30px" style={{ color: "#FF5421" }} /> - Domain Included -</p>

                <p className="card-text mb-4"><RxCross2 size="20px" /> - Unlimited Users -</p>
                <p className="card-text mb-4"><RxCross2 size="20px" /> - Unlimited Support -</p>

                <button className='btn px-4 py-3' style={{ color: "white", backgroundColor: "#FF5421" }}>Start Your Service</button>

              </div>
            </div>
          </div>

          {/* this is single card of pricing section */}
          <div className="col-12 col-md-4 p-md-2 mb-3">
            <div className="card " >
              <div className="card-body text-dark text-center bg-light py-5" style={{ border: "2px solid white", }}>
                <h5 className="card-title mb-3">-Basic Plan-</h5>

                <h1 className="card-subtitle mb-4 ">
                  <sup><FaDollarSign /></sup> 100
                  <p className='fs-6'>per month</p>
                </h1>
                <hr className='mb-4' />
                <p className="card-text mb-4"><TiTick size="30px" style={{ color: "#FF5421" }} /> - Amazing Features -</p>
                <p className="card-text mb-4"><TiTick size="30px" style={{ color: "#FF5421" }} /> - 4 Gb Storage -</p>
                <p className="card-text mb-4"><TiTick size="30px" style={{ color: "#FF5421" }} /> - Domain Included -</p>

                <p className="card-text mb-4"><RxCross2 size="20px" /> - Unlimited Users -</p>
                <p className="card-text mb-4"><RxCross2 size="20px" /> - Unlimited Support -</p>

                <button className='btn px-4 py-3' style={{ color: "white", backgroundColor: "#FF5421" }}>Start Your Service</button>

              </div>
            </div>
          </div>

          {/* this is single card of pricing section */}
          <div className="col-12 col-md-4 p-md-2 mb-3">
            <div className="card " >
              <div className="card-body text-dark text-center bg-light py-5" style={{ border: "2px solid white", }}>
                <h5 className="card-title mb-3">-Basic Plan-</h5>

                <h1 className="card-subtitle mb-4 ">
                  <sup><FaDollarSign /></sup> 100
                  <p className='fs-6'>per month</p>
                </h1>
                <hr className='mb-4' />
                <p className="card-text mb-4"><TiTick size="30px" style={{ color: "#FF5421" }} /> - Amazing Features -</p>
                <p className="card-text mb-4"><TiTick size="30px" style={{ color: "#FF5421" }} /> - 4 Gb Storage -</p>
                <p className="card-text mb-4"><TiTick size="30px" style={{ color: "#FF5421" }} /> - Domain Included -</p>

                <p className="card-text mb-4"><RxCross2 size="20px" /> - Unlimited Users -</p>
                <p className="card-text mb-4"><RxCross2 size="20px" /> - Unlimited Support -</p>

                <button className='btn px-4 py-3' style={{ color: "white", backgroundColor: "#FF5421" }}>Start Your Service</button>

              </div>
            </div>
          </div>



        </div>
      </div>
    </div>
  )
}

export default Pricing