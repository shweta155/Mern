import React from 'react'
import Herosection from '../Components/Heros/Herosection'
import Popluar from '../Components/Popular/Popluar'
import Offers from '../Components/Offers/Offers'
import NewCollections from '../Components/NewCollections/NewCollections'
import NewsLetter from '../Components/NewsLetter/NewsLetter'
// import LoginSinup from './LoginSinup'
const Shop = () => {
  return (
    <div>
      <Herosection />
      <Popluar />
      <Offers />
      <NewCollections/>
      <NewsLetter/>
    
    </div>
  )
}

export default Shop