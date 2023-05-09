import "./App.css";
import CountryList from './components/country/CountryList'
import ProductList from './components/product/ProductList'

function App() {
  return <div className="grid grid-cols-2 gap-4">
         
    <CountryList />
    <ProductList />
    
           </div>;
}

export default App;
