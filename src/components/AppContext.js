import React, {createContext, useState} from 'react'

export const AppContext = createContext();

const AppContextProvider = (props) => {
    const [bill, setBill] = useState(0)
    const [selectedTip, setSelectedTip] = useState(0)
    const [customTip, setCustomTip] = useState("")
    const [npeople, setNpeople] = useState(1)
    return (
        <AppContext.Provider value={{bill, setBill, selectedTip, setSelectedTip, npeople, setNpeople, customTip, setCustomTip}}>
            {props.children}
        </AppContext.Provider>
    )
}

export default AppContextProvider