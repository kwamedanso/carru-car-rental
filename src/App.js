import React, { useState, Suspense } from 'react'
import { Route, Routes } from 'react-router-dom';
import Header from 'Components/shared/Header';
import Footer from 'Components/shared/Footer';
import FilterContext from "filterContext"
import { cars } from 'Data/cars';
import privateRoutes from 'routes';
import BackToTopButton from "Components/shared/BackToTopButton";
import "./index.css"
import Loader from 'Components/shared/Loader';


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

        <Suspense fallback=<div className='center-div'><Loader /></div>>
          <Routes>
            {privateRoutes.map(route => <Route key={route.path} path={route.path} element={route.element} />)}
          </Routes>
        </Suspense>

        <Footer />
      </FilterContext.Provider>
    </>
  )
}