import React, { useState } from 'react'
import { Route, Routes } from 'react-router-dom';
import Home from 'Pages/Home';
import Contact from 'Pages/Contact';
import Testimonials from 'Pages/Testimonials';
import About from './Pages/About';
import Header from 'Components/shared/Header';
import Footer from 'Components/shared/Footer';
import Vehicles from './Pages/Vehicles';
import FilterContext from "filterContext"
import { cars } from 'Data/cars';
import CarPage from "Pages/CarPage";
import BackToTopButton from "Components/shared/BackToTopButton";
import "./index.css"


export default function App() {
  const [allCars] = useState(cars);
  const [filteredCars, setFilteredCars] = useState(cars)
  const [selectedFilters, setSelectedFilters] = useState([])
  const [currentPage, setCurrentPage] = useState(1)
  const [addedExtras, setAddedExtras] = useState([])
  const [resetButton, setResetButton] = useState(false)



  const value = { state: { allCars: allCars, filteredCars: filteredCars, selectedFilters: selectedFilters, currentPage: currentPage, resetButton: resetButton, addedExtras: addedExtras }, actions: { setFilteredCars: setFilteredCars, setSelectedFilters: setSelectedFilters, setCurrentPage: setCurrentPage, setResetButton: setResetButton, setAddedExtras: setAddedExtras } };

  return (
    <>
      <FilterContext.Provider value={value}>
        <Header />
        <BackToTopButton />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/home' element={<Home />} />
          <Route path='/about' element={<About />} />
          <Route path='/vehicles' element={<Vehicles />} />
          <Route path='/testimonials' element={<Testimonials />} />
          <Route path='/contact' element={<Contact />} />
          <Route path='/carpage/:id' element={<CarPage />} />
        </Routes>
        <Footer />
      </FilterContext.Provider>
    </>
  )
}