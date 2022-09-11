import { useEffect,useContext } from "react";
import axios from "axios";
import { AppContext } from "../providers/Index";
import ProductsItem from "../components/ProductsItem";
const Favorites=()=>{
    var token=localStorage.getItem('ajs_user_id')
    const useAppContext = useContext(AppContext)
    const { currentUser,favorites, setfavorites } = useAppContext;
    useEffect(() => {
        var config = {
          method: 'get',
          url: '/api/wishlist',
          headers: { Authorization: `Bearer ${token}` }
        };
        axios(config)
          .then(function (response) {
            console.log(response.data);
            setfavorites(response.data)
          })
          .catch(function (error) {
            console.log(error);
          });
      }, [currentUser]);
     
 
    return <>   
        <div className="PageHeader__Container-sc-19x4r8h-1 fVgVuB">
                <h2 className="PageHeader__Header-sc-19x4r8h-0 jTfioR">Sản phẩm yêu thích</h2>
            </div>
            <div className="ant-row MarketPage__ProductListRow-x35qcj-4 eUijMD" style={{ margin: '-12px' }}>
                {
                    favorites && favorites.map(product => <div key={product.key} className="ant-col ant-col-md-8 ant-col-xl-6" style={{ padding: 12 }}>
                    <article title={product.name} className="Card-gwofcb-0 MarketItem__Container-rr0c4s-0 gpLETI">
                        <div className="CardLink__Container-dqor2y-0 jRvebg">
                            <div className="MarketItem__CardLinkContent-rr0c4s-3 hZWvVs" >
                                <ProductsItem product={product}></ProductsItem>
                            </div>
                        </div>
                    </article>
                </div>)}
            </div>
    </>
}
export default Favorites