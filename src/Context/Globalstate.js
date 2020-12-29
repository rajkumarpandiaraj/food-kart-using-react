import React,{createContext, useState} from 'react';
import menus from '../data'

export const globalData = createContext()
function Globalstate({children}) {
    const [menu] = useState(menus)
    return (
        <globalData.Provider value={{menu}}>
            { children }
        </globalData.Provider>
    )
}

export default Globalstate
