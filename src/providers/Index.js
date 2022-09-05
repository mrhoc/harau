import { createContext,useState } from "react";

export const AppContext=createContext();

const AppProviders=({children})=>{
   const [isOpenMenu, setisOpenMenu] = useState(false)
   return <AppContext.Provider value={{isOpenMenu,setisOpenMenu}}>
        {children}
   </AppContext.Provider>
}
export default AppProviders