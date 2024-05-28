import React from "react";
import { product } from './Data'

const Products = () => {
  return (
    <>
      <section className="product" id="product">
        <h1 className="heading">
          Our <span>Products</span>
        </h1>
        <div className="box-container">
          {product.map((item, index) => (
            <div className="box">
              <div className="icons">
                <a className='fas fa-shopping-cart'></a>
                <a className='fas fa-heart'></a>
                <a className='fas fa-eye'></a>
              </div>
              <div className="image">
                <img src={item.img} alt="" />
              </div>
              <div className="content">
                <h3>Fresh Coffee</h3>
                <div className="stars">
                  <i className='fas fa-star'></i>
                  <i className='fas fa-star'></i>
                  <i className='fas fa-star'></i>
                  <i className='fas fa-star'></i>
                  <i className='fas fa-star-half-alt'></i>
                </div>
                <div className="price">
                  $15.99 <span> $20.99</span>
                </div>
              </div>
            </div>
          ))}

        </div>
      </section>
    </>
  )
}
export default Products