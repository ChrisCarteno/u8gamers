import React from 'react'
import './shop.css'
import Ecommerce from '../../images/ecommercePic.jpg'

const Shop = () => {
  return (
    <div className="main__header">
      <a
      href="https://ecommerce-roan-omega.vercel.app/"
      target="_blank"
      rel="noopener noreferrer"
      className="website-link"
    >
      <h1 className="shop-title">Shop U8 Today</h1>
      <img className="shop-image" src={Ecommerce} alt="Shop U8 Today" width={250} height={250}/>
    </a>
    </div>
    )
}

export default Shop