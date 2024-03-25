import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Product from './page/Product/Product';
import Pricing from './page/Pricing/Pricing';
import Login from './page/Login/Login';
import Homepage from './page/Home/Homepage';
import PageNotFound from './page/PageNotFound/PageNotFound';
import AppLayout from './page/AppLayout/AppLayout';


export default function App() {
  return (

    <BrowserRouter>
    <Routes>
      <Route path="/" element={<Homepage />} />
      <Route path="product" element={<Product />} />
      <Route path="pricing" element={<Pricing />} />
      <Route path="app" element={<AppLayout />} />
      <Route path="Login" element={<Login/>} />
      <Route path="*" element={<PageNotFound/>} />
    </Routes>
    </BrowserRouter>
  )
}
