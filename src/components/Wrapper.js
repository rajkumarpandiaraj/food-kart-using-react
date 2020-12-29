import React from 'react'
import Cart from './Cart'
import ItemContainer from './ItemContainer'
import MenuBar from './MenuBar'

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
