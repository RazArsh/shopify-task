import './App.css';
import ProductsHome from './components/ProductsHome';
import { Route, Routes } from "react-router-dom";
import AddProduct from './components/ProductsHome/AddProduct/AddProduct';
function App() {
  return (
    <div className="App">
      <Routes>
        <Route path='/' element={<ProductsHome />} />
        <Route path="/AddProduct/:id" element={<AddProduct />} />
        <Route path="/AddProduct" element={<AddProduct />} />
      </Routes>
    </div>
  );
}

export default App;
