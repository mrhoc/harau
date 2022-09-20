import './App.css';
import Header from './layout/Header';
import RouteApp from './routes/Index';
import Footer from './layout/Footer';
import {useContext,useEffect} from 'react'
import { AppContext } from './providers/Index';
import axios from 'axios';
function App() {
  var token=localStorage.getItem('ajs_user_id')
  const useAppContext = useContext(AppContext)
  const {setproducts, setproductsCat,setuser,user,favorites,currentUser,products } = useAppContext;
  
  // useEffect(()=>{
  //   console.log('favor change');
  //   products&&products.map((d,index)=>{
  //         favorites&&favorites.map(k=>{
  //           if(k.key===d.key){
  //             d['liked']=true;
  //             console.log('liked');
  //           }
  //           return d;
  //         })
  //       })
  // },[favorites])
  // console.log(favorites);
  
  useEffect(() => {
    var config = {
      method: 'get',
      url: '/api/products/',
      
    };
    axios(config)
      .then(function (response) {
        let dt = response.data;
        setproducts(dt.data)
        setproductsCat(dt.data)
      })
      .catch(function (error) {
        console.log(error);
      });
  }, [currentUser]);


  useEffect(() => {
    var config = {
      method: 'get',
      url: '/profile/user',
      headers: { Authorization: `Bearer ${token}` },
    };
    axios(config)
      .then(function (response) {
        setuser(response.data)
   
      })
      .catch(function (error) {
        console.log(error);
      });
  }, [currentUser]);

  

  return (
    <div className="App">
      <Header></Header>
      <RouteApp></RouteApp>
      <Footer></Footer>
    </div>
  );
}

export default App;
