import React from 'react';
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import Movie from '../Movie/Movies';
import Theater from '../Theater/Theater';
import Seats from '../CheckSeats/Seats';
import { useSelector } from 'react-redux';
import Popup from '../Popup';
import Payment from '../Payment/Payment';
// import store from '../app/store'

const Router = () => {
  const state = useSelector(({sample})=>sample)
  return (
    <>
      {state.isAthendicate ? (
        <BrowserRouter>
          <Routes>
          <Route path='/' element={<Movie />}></Route>
            <Route path='/buytickets' element={<Theater />}></Route>
            <Route path='/selectSeats' element={<Popup />}></Route>
            <Route path='/seatsAvailability' element={<Seats />}></Route>
            <Route path='/payment' element={<Payment />}></Route>
          </Routes>
      </BrowserRouter>
      ):(
        <BrowserRouter>
          <Routes>
            <Route path='*' element={<Movie />}></Route>
          </Routes>
        </BrowserRouter>
      )}
        
    </>
  )
}

export default Router