import React from 'react'
import CartItem from './CartItem'

function Cart() {
    return (
        <header className="head">
            <h1>Our Menu</h1>
            <div className="item-values">
                <button type="button" className="total" id="total-value">4 items-Rs.450</button>
                <div className="cart-items">
                    <CartItem/>
                </div>
            </div>
        </header>
    )
}

export default Cart
