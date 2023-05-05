import './DescStyles.css'

import React from 'react'
import sta from '../assets/star.png'
import ic from '../assets/topi.png'
import infoo from '../assets/info.png'
import qt from '../assets/inbtn.png'
import li1 from '../assets/L1.png'
import li2 from '../assets/L2.png'

const Desc = () => {
  return (
    <div className='des'>
        <div className="des-container">
            <div className="desc">
                <h1>ESOR CHOCO BUTTERSCOTCH</h1>
                <img className='i1' src={sta} alt="sta" />
                <img className='i2' src={ic} alt="ic" />
                <h2>These premium rich, centre-filled chocolates are a perfect gift for any occasion and will keep you coming back for more!</h2>
                <h3>SKU:</h3>
                <h4>Category:</h4>
                <h5>Stock:</h5>
                <p>76645</p>
                <p1>Nuts</p1>
                <p2>In Stock</p2>
                <img className='i3' src={infoo} alt="infoo" />
            </div>
            <div className="descone">
                <h1>Rs. 1223</h1>
                <h2>(36% OFF)</h2>
                <h3>Rs. 299</h3>
                <img className='i4' src={qt} alt="qt" />
                <button>Add to Cart</button>
                <h4>Description</h4>
                <h5>Reviews</h5>
                <h6>18</h6>
                <img className='i5' src={li1} alt="" />
                <img className='i6' src={li2} alt="" />
            </div> 
            <div className="decstwo">
                <h1>Origins</h1>
                <p>We work hard to ensure that the fruit and vegetables we sell are fresh and high in quality. If we don’t grow them ourselves, we source them from carefully chosen suppliers, preferring to buy locally whenever possible.</p>
            </div>  
            <div className="descthree">
                <h1>How to cook</h1>
                <p>From roasts, salads and soups to casseroles and cakes, Carrots will lend sweetness, texture and colour to an enormous number of recipes.</p>
            </div>  
            <div className="full">
                <h1>Full of Vitamins!</h1>
                </div>    

            <div className="vit">
            <h1>Vitamins</h1>  
            <h2>Vitamin A equiv.</h2> 
            <h3>Thiamine (B1)</h3> 
            <h4>Niacin (B3)</h4>
            <h5>Folate (Bg)</h5>
            <h6>Vitamin C</h6>
            <p>Vitamin E</p>
            <p1>Vitamin K</p1>
            </div>   
            <div className="quan">
            <h1>Quantity</h1>  
            <h2>735 μg</h2> 
            <h3>0.066 mg</h3> 
            <h4>0.983 mg (B1)</h4>
            <h5>19 μg (B3)</h5>
            <h6>5.9 mg (Bg)</h6>
            <p>0.66 mg</p>
            <p1>13.2</p1>
            </div>
            <div className="dvv">
            <h1>% DV</h1>  
            <h2>104 %</h2> 
            <h3>6 %</h3> 
            <h4>7 %</h4>
            <h5>5 %</h5>
            <h6>7 %</h6>
            <p>4 %</p>
            <p1>13 %</p1>
            </div>
        </div>
      
    </div>
  )
}

export default Desc
