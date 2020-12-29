import React from 'react'
import { useContext } from 'react';
import Item from './Item';
import { globalData } from '../Context/Globalstate'

function ItemContainer() {
    const { menu } = useContext(globalData);
    return (
        <div className="menu-container">
            {
                menu.map(item => <Item key={item.id} item={item} />)
            }
        </div>
    )
}

export default ItemContainer
