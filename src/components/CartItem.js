import React,{useContext} from 'react';
import { globalData } from '../Context/Globalstate';

function CartItem(props) {
    const {item} = props;
    const { deleteHandle } = useContext(globalData);
    return (
        <tr className='list-it'>
            <td>{item.name}</td>
            <td>{item.quantity}</td>
            <td>Rs.{item.total}</td>
            <td className="delete"><i onClick={() => deleteHandle(item.id)} className="fas fa-trash"></i></td>
        </tr>
    )
}

export default CartItem
