import React,{createContext, useState,useEffect} from 'react';
import menus from '../data'

export const globalData = createContext()
function Globalstate({children}) {
    const [menu, setMenu] = useState(menus);
    const [ orderedMenu, setOrderedMenu ] = useState([]);
    const [ category, setCategory ] = useState([]);
    const [ listItem, setListItem ] = useState('all');
    const [ cart, setCart ] = useState([]);
    const [ cartTotal, setCartTotal ] = useState(0);
    const [modalState, setModalState] = useState(false)
    useEffect(() =>{
        const tempTotal = cart.reduce((prev,cur) =>{
            prev += cur.total;
            return prev;
        }, 0)
        setCartTotal(tempTotal);
    },[cart])
    const createCategory = () =>{
        const categoryList = [...new Set(menu.map(item => item.category))]
        categoryList.unshift('all')
        setCategory(categoryList);
    }
    const cartHandle = id =>{
        const cartProduct = menu.find(item => item.id === id)
        if(cartProduct.inCart){
            const tempCart = cart.map(item => {
                if(item.id === id){
                    item.quantity = item.quantity + 1
                    item.total = item.price * item.quantity
                    return item
                }
                return item
            })
            setCart(tempCart)
        }else{
            const tempMenu = menu.map(item => {
                if(item.id === id){
                    item.inCart = true;
                    return item
                }
                return item
            })
            cartProduct.total = cartProduct.price * cartProduct.quantity
            setMenu(tempMenu)
            setCart([...cart, cartProduct])
        }
        }

    const listItemHandle = e =>{
        setListItem(e.target.id);
    }
    const menuByOrder = () =>{
        if(listItem === 'all'){
            setOrderedMenu(menu);
        }else{
            const tempMenu = menu.filter(item => item.category === listItem)
            setOrderedMenu(tempMenu)
        }
    }
    const deleteHandle = id => {
        const deleteProduct = cart.find(item => item.id === id);
        if(deleteProduct.quantity > 1){
            const tempCartDelete = cart.map(item => {
                if(item.id === id){
                        item.quantity -= 1
                        item.total = item.price * item.quantity
                        return item
                }
                return item
            })
            setCart(tempCartDelete)
        }else{
            const tempCartDel = cart.filter(item => item.id !== id)
            const tempMenu = menu.map(item => {
                if(item.id === id){
                    item.inCart = false
                    return item
                }
                return item
            })
            setCart(tempCartDel)
            setMenu(tempMenu);
        }        
    }
    const changeCartProp = item =>{
        const tempClearMenu = menu.map(foodItem => {
            if(foodItem.id === item.id){
                foodItem.inCart = false
                return foodItem
            }
            return foodItem
        })
        setMenu(tempClearMenu);
    }
    const clearCartHandle = () =>{
        cart.forEach(item => {
            changeCartProp(item)
        })
        setCart([]);
    }
    const modalHandler = (e, isCheckout = false) =>{
        setModalState(!modalState);
        if(isCheckout){
            clearCartHandle();
        }
    }
    return (
        <globalData.Provider value={{
            menu,
            category,
            createCategory,
            menuByOrder,
            orderedMenu,
            listItemHandle,
            listItem,
            cart,
            cartHandle,
            deleteHandle,
            clearCartHandle,
            cartTotal,
            modalState,
            modalHandler
        }}>
            { children }
        </globalData.Provider>
    )
}

export default Globalstate
