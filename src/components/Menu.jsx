import React from 'react'
import { menu } from './Data'
const Menu = () => {
    return (
        <>
            <section className='menu' id='menu'>
                <h1 className='heading'>
                    Our<span> Menu</span>
                </h1>
                <div className='box-container'>
                    {menu.map((item, index) => (
                        <div className='box'>
                            <img src={item.img} />
                            <h3>Tasty and Healthy</h3>
                            <div className='price'>
                                $15.5 <span> 10.99</span>
                            </div>
                            <a href='#'>Add to cart</a>
                        </div>
                    ))}
                </div>
            </section>
        </>
    )
}
export default Menu
