import './pricingCardStyles.css'

import React from 'react'
import Into1 from "../assets/cspice.png"
import Into2 from "../assets/dates.png"
import Into3 from "../assets/rbox.png"
import Into4 from "../assets/cbottlespice.png"
import Into5 from "../assets/topi.png"
import Into6 from "../assets/Licon.png"

import { Link } from 'react-router-dom'


const pricingCard = () => {
  return (
    <div className='pricing'>
      <div className="card-container">
        <div className="card1">
          <img className='immmg1' src={Into5} alt="Into5" />
      <img className='iimg' src={ Into6 } alt=" Into6" />

            <img  className="img1" src={Into1} alt="Into1 " />
            <h3>ESOR Drinking Choclate</h3>
            <h5>Drinking Choclate</h5>
            <p>Rs. 1223</p>
            <p1>(36% OFF)</p1>
            <p2>Rs.976</p2>
            <button>Add To Cart</button>
        </div>
      </div>
      <div className="card2">
      <img className='iimg' src={ Into6 } alt=" Into6" />

      <img className='immmg1' src={Into5} alt="Into5" />
            <img  className="img2" src={Into2} alt="Into1 " />
            <h3>ESOR CHOCO CRISPIES</h3>
            <h5>Drinking Choclate</h5>
            <p>Rs. 1223</p>
            <p1>(36% OFF)</p1>
            <p2>Rs.776</p2>
            <button>Add To Cart</button>
        </div>
        <div className="card3">
      <img className='iimg' src={ Into6 } alt=" Into6" />

      <img className='immmg1' src={Into5} alt="Into5" />

            <img  className="img3" src={Into3} alt="Into1 " />
            <h3>GIFT BOX</h3>
            <h5>Drinking Choclate</h5>
            <p>Rs. 1223</p>
            <p1>(36% OFF)</p1>
            <p2>Rs.299</p2>
            <Link>
            <button>Add To Cart</button>
            </Link>
        </div>
        <div className="card4">
      <img className='iimg' src={ Into6 } alt=" Into6" />

      <img className='immmg1' src={Into5} alt="Into5" />

            <img  className="img4" src={Into4} alt="Into1 " />
            <h3>ESOR CHOCO BUTTER</h3>
            <h5>Drinking Choclate</h5>
            <p>Rs. 1223</p>
            <p1>(36% OFF)</p1>
            <p2>Rs.876</p2>
            <button >Add To Cart</button>
        </div>
    </div>
  )
}

export default pricingCard

