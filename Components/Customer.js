import './CustomerStyles.css'

import React from 'react'
import Into1 from "../assets/girlo.png"
import Into2 from "../assets/girlto .png"
import Into4 from "../assets/girlt.png"
import s1 from "../assets/star.png"

const Customer = () => {
  return (
    <div className='customer'>
      <div className="custm-container">
        <div className="custmm1">
            <img  className="img1" src={Into1} alt="Into1" />
            <p>Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.</p>
           
            <h5>Istiak Ahmed CEO, Avito</h5>
            <img className='star' src={s1} alt="s1" />
            
            
        </div>
      </div>
      <div className="custmm2">
            <img  className="img2" src={Into2} alt="Into1 " />
            <p>Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.</p> 
            <h5>Istiak Ahmed CEO, Avito</h5>
            <img className='star' src={s1} alt="s1" />

        </div>
       
        <div className="custmm3">
            <img  className="img3" src={Into4} alt="Into1 " />
            <p>Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.</p>
            <h5>Istiak Ahmed CEO, Avito</h5>
            <img className='star' src={s1} alt="s1" />

        </div>
    </div>

  )
}

export default Customer
