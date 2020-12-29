import React from 'react';

function Item(props) {
    const { item } = props;
    return (
    <div className="menu breakfast">
        <div className="img">
            <img src={item.img} alt="food" />
        </div>
        <div className="text">
            <p>{item.name}</p>
            <p className="price">Rs.{item.price}</p>
        </div>
        <div className="shopping">
            <i className="fas fa-shopping-cart cart cs"></i>
        </div>
    </div>
    )
}

export default Item
