import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/header/Navbar';
import FooterArea from './components/footer/footerArea';
import Home from './pages/Home';
import Login from './pages/authentication/login';
import Register from './pages/authentication/register';
// import {AuthProvider} from "../src/contexts/AuthContext";
import Dashboard from './backend/adminPanel/dashboard';
import ProductCategories from './pages/productCategories/productCategories';

function App() {
  return (
    <Router>
      {/* <AuthProvider> */}
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/buzfi/sellerpanel" element={<Dashboard />} />
          <Route path="/categories" element={<ProductCategories />} />
        </Routes>
        <FooterArea />
      {/* </AuthProvider> */} 
    </Router>
  );
}
export default App;
