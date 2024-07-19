
import './App.css';
import Navbar from './Components/Assets/Navbar/Navbar';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Shop from './Pages/Shop.jsx';
import ShopCategory from './Pages/ShopCategory.jsx'
import Product from './Pages/Product.jsx'
import Cart from './Pages/Cart.jsx';
import LoginSinup from './Pages/LoginSinup.jsx'
import Footer from './Components/Footer/Footer.jsx';
import men_banner from './Components/Assets/images/banner_mens.png'
import womens_banner from './Components/Assets/images/banner_women.png'
import kids_banner from './Components/Assets/images/banner_kids.png';



function App() {
  return (
    <div >
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path='/' element={<Shop />}></Route>
          <Route path='/mens' element={<ShopCategory banner={men_banner} category='men' />}></Route>
          <Route path='/womens' element={<ShopCategory banner={womens_banner} category='women' />}></Route>
          <Route path='/kids' element={<ShopCategory banner={kids_banner} category='kid' />}></Route>

          <Route path='/product' element={<Product />}>
            <Route path=":productId" element={<Product />}></Route>
          </Route>
          <Route path='/cart' element={<Cart />}></Route>
          <Route path='/login' element={<LoginSinup />}></Route>
        </Routes>

        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
