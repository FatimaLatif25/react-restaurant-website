import React, { useRef } from 'react'
import Logo from '../assets/images/logo.png'
import { cart } from './Data'

const Navbar = () => {
    const searchRef = useRef()
    const cartRef = useRef()
    const navbarRef = useRef()

    const searchHandler = () => {
        searchRef.current.classList.toggle('active') //useRef use when we need current element reference
        cartRef.current.classList.remove('active')
        navbarRef.current.classList.remove('active')
    }

    const cartHandler = () => {
        cartRef.current.classList.toggle('active')
        searchRef.current.classList.remove('active')
        navbarRef.current.classList.remove('active')

    }

    const navbarHandler = () => {
        {
            navbarRef.current.classList.toggle('active')
            cartRef.current.classList.remove('active')
            searchRef.current.classList.remove('active')
        }
    }
    return (
        <>
            <header className='header'>
                <a href='#' className='logo' >
                    <img src={Logo} alt='logo' />
                </a>
                <nav className='navbar' ref={navbarRef}>
                    <a href='#home'>Home</a>
                    <a href='#about'>About</a>
                    <a href='#menu'>Menu</a>
                    <a href='#product'>products</a>
                    {/* <a href='#review'>review</a> */}
                    <a href='#contact'>Contact</a>
                    {/* <a href='#blogs'>blogs</a> */}
                </nav>
                <div className='icons'>
                    <div className='fas fa-search' onClick={searchHandler}></div>
                    <div className='fas fa-shopping-cart' onClick={cartHandler}></div>
                    <div className='fas fa-bars' id='menu-btn' onClick={navbarHandler}></div>
                    <div className='search-form' ref={searchRef}>
                        <input type='search' placeholder='search here...' id='search-box'></input>
                        <label htmlFor='search-box' className='fas fa-search'></label>
                    </div>
                </div>
                <div className='cart-item-container' ref={cartRef}>
                    {cart.map((item, index) => (
                        <div className='cart-item'>
                            <span className='fas fa-times'></span>
                            <img src={item.img} />
                            <div className='content'>
                                <h1>Cart Item 01</h1>
                                <div className='price'>1000</div>
                            </div>
                        </div>
                    ))}
                    <a href='#' className='btn'>CheckOut Now</a>
                </div>
            </header>
        </>
    )
}
export default Navbar