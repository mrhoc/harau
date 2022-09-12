import { createContext, useState } from "react";

export const AppContext = createContext();

const AppProviders = ({ children }) => {
   const [isOpenMenu, setisOpenMenu] = useState(false)
   const [products, setproducts] = useState([])
   const [productsCat, setproductsCat] = useState([])
   const [favorites, setfavorites] = useState([])
   const [activeCat, setactiveCat] = useState({})
   const [txtSearch, settxtSearch] = useState('')
   const [reloadFoverites,setreloadFoverites]=useState(false)

   
   const [currentUser, setcurrentUser] = useState({})

   return <AppContext.Provider value={
      {
         isOpenMenu, setisOpenMenu,
         txtSearch, settxtSearch,
         products, setproducts,
         productsCat, setproductsCat,
         activeCat,setactiveCat,
         currentUser,setcurrentUser,
         favorites,setfavorites,
         reloadFoverites,setreloadFoverites
         
      }
   }>
      {children}
   </AppContext.Provider>
}
export default AppProviders