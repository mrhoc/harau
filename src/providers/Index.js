import { createContext, useState } from "react";

export const AppContext = createContext();

const AppProviders = ({ children }) => {
   const [isOpenMenu, setisOpenMenu] = useState(false)
   const [products, setproducts] = useState([])
   const [productsCat, setproductsCat] = useState([])
   const [favorites, setfavorites] = useState([])
   const [activeCat, setactiveCat] = useState({})
   const [txtSearch, settxtSearch] = useState('')

   
   const [currentUser, setcurrentUser] = useState({})

   return <AppContext.Provider value={
      {
         isOpenMenu, setisOpenMenu,
         txtSearch, settxtSearch,
         products, setproducts,
         productsCat, setproductsCat,
         activeCat,setactiveCat,
         currentUser,setcurrentUser,
         favorites,setfavorites
         
      }
   }>
      {children}
   </AppContext.Provider>
}
export default AppProviders