import { createContext, useState } from "react";

export const AppContext = createContext();

const AppProviders = ({ children }) => {
   const [isOpenMenu, setisOpenMenu] = useState(false)
   const [products, setproducts] = useState([])
   const [activeCat, setactiveCat] = useState({})
   const [productsCat, setproductsCat] = useState([])
   const [txtSearch, settxtSearch] = useState('')
   
   return <AppContext.Provider value={
      {
         isOpenMenu, setisOpenMenu,
         txtSearch, settxtSearch,
         products, setproducts,
         productsCat,setproductsCat,
         activeCat,setactiveCat
      }
   }>
      {children}
   </AppContext.Provider>
}
export default AppProviders