import './Combo2Styles.css'

import React from 'react'
import Into1 from "../assets/G1.png"
import Into2 from "../assets/G2.png"
import Into3 from "../assets/G3.png"
import Into4 from "../assets/G4.png"
import Into5 from "../assets/topi.png"
import Into6 from "../assets/Licon.png"


function Combo2() {
    return (
        <div className='combo'>
            <div className="combo-container">
                <div className="carrd1">
                    <img className='ico1' src={ Into5} alt="" />
                    <img className='ico2' src={Into6} alt="" />
                    <img className="img1" src={Into1} alt="Into1 " />
                    <h3>ESOR Drinking Choclate</h3>
                    <h5>Drinking Choclate</h5>
                    <p>Rs. 1223</p>
                    <p1>(36% OFF)</p1>
                    <p2>Rs.976</p2>
                    <button>Add To Cart</button>
                </div>
            </div>
            <div className="carrd2">
            <img className='ico1' src={ Into5} alt="" />
                    <img className='ico2' src={Into6} alt="" />
                <img className="img2" src={Into2} alt="Into1 " />
                <h3>ESOR CHOCO CRISPIES</h3>
                <h5>Drinking Choclate</h5>
                <p>Rs. 1223</p>
                <p1>(36% OFF)</p1>
                <p2>Rs.976</p2>
                <button>Add To Cart</button>
            </div>
            <div className="carrd3">
            <img className='ico1' src={ Into5} alt="" />
                    <img className='ico2' src={Into6} alt="" />
                    <img className="img3" src={Into3} alt="Into1 " />
                    <h3>GIFT BOXES</h3>
                    <h5>Drinking Choclate</h5>
                    <p>Rs. 1223</p>
                    <p1>(36% OFF)</p1>
                    <p2>Rs.976</p2>
                    <button>Add To Cart</button>
                </div>
            <div className="carrd4">
            <img className='ico1' src={ Into5} alt="" />
                    <img className='ico2' src={Into6} alt="" />
                <img className="img4" src={Into4} alt="Into1 " />
                <h3>ESOR CHOCO BUTTER</h3>
                <h5>Drinking Choclate</h5>
                <p>Rs. 1223</p>
                <p1>(36% OFF)</p1>
                <p2>Rs.976</p2>
                <button>Add To Cart</button>
            </div>
           
          
        </div>
    )
}

export default Combo2

