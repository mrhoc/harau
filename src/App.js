import './App.css';
import Header from './layout/Header';
import RouteApp from './routes/Index';
import Footer from './layout/Footer';

function App() {
  return (
    <div className="App">
        <Header></Header>
        <RouteApp></RouteApp>
        <Footer></Footer>
    </div>
  );
}

export default App;
