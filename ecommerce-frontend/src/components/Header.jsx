import { useState } from 'react';
import './Header.css'
import { NavLink, useNavigate } from 'react-router'
export function Header({cart}) {

    let productsQuantity = 0
    cart.forEach(cartItem => {
        productsQuantity += cartItem.quantity
    });
    const[searchInput,setSearchInput]=useState()
    const searchItem = (event)=>{
        setSearchInput(event.target.value)
    }
    const navigate = useNavigate()
    return (
        <>
            <div className="header">
                <div className="left-section">
                    <NavLink to="/" className="header-link">
                        <div className='left-title'>E-commerce</div>
                    </NavLink>
                </div>

                <div className="middle-section">
                    <input className="search-bar" onChange={searchItem} type="text" placeholder="Search" />

                    <button className="search-button" onClick={() => navigate(`/?search=${searchInput}`)}>
                        <img className="search-icon" src="images/icons/search-icon.png" />
                    </button>
                </div>

                <div className="right-section">
                    <NavLink className="orders-link header-link" to="/orders">

                        <span className="orders-text">Orders</span>
                    </NavLink>

                    <NavLink className="cart-link header-link" to="/checkout">
                        <img className="cart-icon" src="images/icons/cart-icon.png" />
                        <div className="cart-quantity">{productsQuantity}</div>
                        <div className="cart-text">Cart</div>
                    </NavLink>
                </div>
            </div>

        </>

    )
}