import { createContext, useState } from "react";

export const AppContext = createContext();

const AppProviders = ({ children }) => {
   const [isOpenMenu, setisOpenMenu] = useState(false)
   const [products, setproducts] = useState([])
   const [productsCat, setproductsCat] = useState([])
   const [activeCat, setactiveCat] = useState({})
   const [txtSearch, settxtSearch] = useState('')

   const [user, setuser] = useState('')

   return <AppContext.Provider value={
      {
         isOpenMenu, setisOpenMenu,
         txtSearch, settxtSearch,
         products, setproducts,
         productsCat, setproductsCat,
         activeCat,setactiveCat,
         user,setuser
      }
   }>
      {children}
   </AppContext.Provider>
}
export default AppProviders