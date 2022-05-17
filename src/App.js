import './App.css';
import Cart from './Pages/Cart';
import Login from './Pages/Login';
import Product from './Pages/Product';
import Register from './Pages/Register';
import Home from './Pages/Home'
import ProductList from './Pages/ProductList';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';

function App() {
  return (
    <div>
      <Router>
        <Routes>
          <Route exact path ='/' element={<Home />} />
          <Route path ='/cart' element={<Cart />} />
          <Route path ='/login' element={<Login />} />
          <Route path ='/register' element={<Register />} />
          <Route path ='/product' element={<Product />} />
          <Route path ='/productlist' element={<ProductList />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
