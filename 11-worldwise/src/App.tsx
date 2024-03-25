import { useEffect, useState } from 'react';

import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import Product from './page/Product/Product';
import Pricing from './page/Pricing/Pricing';
import Login from './page/Login/Login';
import Homepage from './page/Home/Homepage';
import PageNotFound from './page/PageNotFound/PageNotFound';
import AppLayout from './page/AppLayout/AppLayout';
import CityList from './components/CityList/CityList';
import CountriesList from './components/CountriesList/CountryList';
import City from './components/City/City';
import Form from './components/Form/Form';

const BASE_URL = 'http://localhost:9000'

export default function App() {
  const [cities, setCities] = useState([])
  const [isLoading, setIsLoading] = useState(false)


  useEffect(function () {
    async function fetchCities(){
      try{
      setIsLoading(true)
      const res = await fetch(`${BASE_URL}/cities`);
      const data = await res.json();
      setCities(data);
    } catch {
      alert('There was an error loading data...')
     } finally {
      setIsLoading(false)
     }
    }
    fetchCities();
  }, []);

  return (

    <BrowserRouter>
    <Routes>
      <Route path="/" element={<Homepage />} />
      <Route path="product" element={<Product />} />
      <Route path="pricing" element={<Pricing />} />
      <Route path="app" element={<AppLayout />}>
        <Route index element={<Navigate replace to='cities' />}/>
        <Route path='cities' element={<CityList cities={cities} isLoading={isLoading}/>}/>
        <Route path='cities/:id' element={<City/>}/>
        <Route path='countries' element={<CountriesList cities={cities} isLoading={isLoading} />}/>
        <Route path='form' element={<Form/>}/>
      </Route>
      <Route path="Login" element={<Login/>} />
      <Route path="*" element={<PageNotFound/>} />
    </Routes>
    </BrowserRouter>
  )
}
