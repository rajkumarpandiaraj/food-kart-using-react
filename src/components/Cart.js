import React from 'react'
import { useContext } from 'react';
import { globalData } from '../Context/Globalstate';


function Cart() {
    const { cart, cartTotal, modalHandler } = useContext(globalData)
    return (
        <header className="head">
            <h1>Our Menu</h1>
            <div className="item-values">
                <button type="button" onClick={modalHandler} className="total" id="total-value">{cart.length} items-Rs.{cartTotal}</button>
            </div>
        </header>
        
    )
}

export default Cart
