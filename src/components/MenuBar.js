import React,{useEffect,useContext} from 'react';
import { globalData } from '../Context/Globalstate';

function MenuBar() {
    const { category, createCategory, listItemHandle, listItem } = useContext(globalData)
    useEffect(() =>{
        createCategory();
    },[])
    return (
    <section className="buttons">
        {
            category.map(item => <button onClick={listItemHandle} type='button' key={item} className={listItem === item ? 'button active-btn' : 'button'} id={item}>{item.toUpperCase()}</button>)
        }
    </section>
    )
}

export default MenuBar
