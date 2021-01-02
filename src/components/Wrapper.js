import React from 'react'
import ItemContainer from './ItemContainer'
import MenuBar from './MenuBar'
import Cart from './Cart';

function Wrapper() {
    return (
        <div className="container">
            <Cart/>
            <MenuBar/>
            <ItemContainer/>
        </div>
    )
}

export default Wrapper
