import React,{useContext} from 'react';
import { globalData } from '../Context/Globalstate';

function Item(props) {
    const { item } = props;
    const { cartHandle } = useContext(globalData);
    return (
    <div className="menu breakfast">
        <div className="img">
            <img src={item.img} alt="food" />
        </div>
        <div className="text">
            <p>{item.name}</p>
            <p className="price">Rs.{item.price}</p>
        </div>
        <div className="shopping" onClick={() => cartHandle(item.id)}>
            <i className="fas fa-shopping-cart cart cs"></i>
        </div>
    </div>
    )
}

export default Item
