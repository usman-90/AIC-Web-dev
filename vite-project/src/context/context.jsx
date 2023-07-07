import { createContext, useContext, useState } from "react";

import { onAuthStateChanged } from "firebase/auth";
import { auth } from "../firebase/config";




const AppContext = createContext(null)

export const AppProvider = ({children}) => {
    const [isLoggedin, setIsLoggedin] = useState(false)
    onAuthStateChanged(auth, (user) => {
        if (user) {
          const uid = user.uid;
          setIsLoggedin(true)
      
        } else {
          setIsLoggedin(false)
        }
      });

      console.log(isLoggedin)

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

