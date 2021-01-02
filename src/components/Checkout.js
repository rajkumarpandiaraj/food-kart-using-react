import React from 'react';
import { Link } from 'react-router-dom';

function Checkout() {
    return (
        <div className='checkout-wrapper'>
            <h1 className='check-h1'>Your Ordered has been Placed Successfully...</h1>
            <Link to='/' exact='true' className='link-btn'>
                <button className='btn'>Back to Home</button>
            </Link>
        </div>

    )
}

export default Checkout
