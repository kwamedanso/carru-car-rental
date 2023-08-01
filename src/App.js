import React, { useState } from 'react'
import { Route, Routes } from 'react-router-dom';
import Home from './Pages/Home';
import Contact from './Pages/Contact';
import Testimonials from './Pages/Testimonials';
import About from './Pages/About';
import Header from './Components/Header';
import Footer from './Components/Footer';
import Vehicles from './Pages/Vehicles';
import FilterContext from './Components/filterContext';
import { cars } from './Data/cars';

export default function App() {
  const [allCars] = useState(cars);
  const [filteredCars, setFilteredCars] = useState(cars)
  const [activeButton, setactiveButton] = useState('All');
  const [selectedBrands, setSelectedBrands] = useState([]);
  const [newFilter, setNewFilter] = useState([]);



  const value = { state: { allCars: allCars, filteredCars: filteredCars, activeButton: activeButton, selectedBrands: selectedBrands, newFilter: newFilter }, actions: { setFilteredCars: setFilteredCars, setactiveButton: setactiveButton, setSelectedBrands: setSelectedBrands, setNewFilter: setNewFilter } };

  return (
    <>
      <FilterContext.Provider value={value}>
        <Header />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/about' element={<About />} />
          <Route path='/vehicles' element={<Vehicles />} />
          <Route path='/testimonials' element={<Testimonials />} />
          <Route path='/contact' element={<Contact />} />
        </Routes>
        <Footer />
      </FilterContext.Provider>
    </>
  )
}
