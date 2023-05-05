import './NewsStyles.css'

import React from 'react'
import recc from "../assets/rec1.png"
import neew from "../assets/newss.png"

const News = () => {
  return (
    <div className='news'>
      <img className='r1' src={recc} alt="recc" />
      <div className='new'>
        <img className='n1' src={neew} alt="neew" />
    </div>
    </div>
  )
}

export default News
