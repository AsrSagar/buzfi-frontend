import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Login from './pages/authentication/login';
import Register from './pages/authentication/register';
// import {AuthProvider} from "../src/contexts/AuthContext";
import Dashboard from './backend/adminPanel/dashboard';
import ProductCategories from './pages/productCategories/productCategories';
import AllProductsList from './backend/productlist/allproducts';
import ProductDetails from './pages/productDetails/productDetails';

function App() {
  return (
    <Router>
      {/* <AuthProvider> */}
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/buzfi/admin" element={<Dashboard />} />
          <Route path="/categories" element={<ProductCategories />} />
          <Route path="/products" element={<AllProductsList />} />
          <Route path="/productsdetails" element={<ProductDetails />} />
        </Routes>
      {/* </AuthProvider> */} 
    </Router>
  );
}
export default App;
