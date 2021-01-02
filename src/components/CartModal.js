import React,{useContext} from 'react'
import { globalData } from '../Context/Globalstate'
import CartItem from './CartItem';
import Fade from 'react-reveal/Fade';
import { Link } from 'react-router-dom';

function CartModal() {
    const { cart,clearCartHandle, modalHandler, cartTotal, modalState } = useContext(globalData);
    return (
        <Fade top when={modalState}>
        <div className='modal-wrapper'>
            <div className="modal-inner">
            <table className='modal-table'>
                <thead>
                    <tr>
                        <th>Items</th>
                        <th>Qty</th>
                        <th>Amount</th>
                        <th></th>
                    </tr>                            
                </thead>
                <tbody className="cart-list">
                    {
                        cart.map(item => <CartItem key={item.id} item={item}/>)
                    }
                </tbody>

                    </table>
                    <div className="total-item-values total-item-values-container" id="total-item-values-container">
                        <div className="list-item-total-value" id="total-item-values">
                            <span>Total</span>
                            <span id="total-amount">Rs.{cartTotal}</span>
                        </div>
                    </div>
                    <div className="clear-check">
                        <button type="button" className="clear" id="clear" onClick={clearCartHandle}>Clear</button>
                        <Link to='/checkout' exact='true'>
                            <button type="button" onClick={(e) => modalHandler(e,true)} className="check-out" id="check-out">Check Out</button>
                        </Link>
                    </div>
                    </div>
        </div>
        </Fade>
    )
}

export default CartModal
