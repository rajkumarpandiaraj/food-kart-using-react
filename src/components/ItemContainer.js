import React from 'react'
import { useContext,useEffect } from 'react';
import Item from './Item';
import { globalData } from '../Context/Globalstate'

function ItemContainer() {
    const { menuByOrder,listItem, orderedMenu  } = useContext(globalData);
    useEffect(() => {  
        menuByOrder();
    }, [listItem])
    return (
        <div className="menu-container">
            {
                orderedMenu.map(item => <Item key={item.id} item={item} />)
            }
        </div>
    )
}

export default ItemContainer
