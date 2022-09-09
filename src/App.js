import './App.css';
import Header from './layout/Header';
import RouteApp from './routes/Index';
import Footer from './layout/Footer';
import {useContext,useEffect} from 'react'
import { AppContext } from './providers/Index';
import axios from 'axios';
function App() {
  const useAppContext = useContext(AppContext)
  const {setproducts, setproductsCat } = useAppContext;

  useEffect(() => {
    var config = {
      method: 'get',
      url: '/api/products/',
    };
    axios(config)
      .then(function (response) {
        let dt = response.data
        setproducts(dt.data)
        setproductsCat(dt.data)
      })
      .catch(function (error) {
        console.log(error);
      });
  }, []);

  return (
    <div className="App">
      <Header></Header>
      <RouteApp></RouteApp>
      <Footer></Footer>
    </div>
  );
}

export default App;
