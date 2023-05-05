import React from 'react'
import Navbar2 from '../Components/Navbar2'
import Prod1 from '../Components/Prod1'
import Prods from '../Components/Prods'
import Desc from '../Components/Desc'
import Best from '../Components/Best'
import BestH from '../Components/BestH'
import BestF from '../Components/BestF'

const Products = () => {
  return (
    <div>
      <Navbar2 />
      <Prod1/>
      <Prods/>
      <Desc/>
      <Best/>
      <BestH/>
      <BestF/>
    </div>
  )
}

export default Products
