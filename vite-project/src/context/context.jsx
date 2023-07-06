import { createContext, useContext, useState } from "react";

const AppContext = createContext(null)

export const AppProvider = ({children}) => {
    const [isLoggedin, setIsLoggedin] = useState(false)

    return(
        <AppContext.Provider
        value={{isLoggedin, setIsLoggedin}}>
            {children}
        </AppContext.Provider>

    )
}

export const useGlobalContext = () => {
    return useContext(AppContext)
}

