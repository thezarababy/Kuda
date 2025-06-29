import React from 'react'
import { BrowserRouter,Routes,Route } from 'react-router-dom';
import Header from "./static/Header";
import Footer from "./static/Footer";
import  Home  from './pages/Home';
import Personal from "./pages/Personal";
import Business from "./pages/Business";
import Company from "./pages/Company";
import Help from "./pages/Help";



const App = () => {
  return (
    <BrowserRouter>
    <Header />
    <Routes>
      <Route path='/' element={<Home />}/>
      <Route path='/personal' element={<Personal />}/>
      <Route path='/business' element={<Business />}/>
      <Route path='/company' element={<Company />} />
      <Route path='/help' element={<Help />} />

      

    </Routes>
    <Footer />
    </BrowserRouter>
  )
}

export default App