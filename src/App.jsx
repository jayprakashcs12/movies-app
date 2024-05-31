import React from 'react';
import { Route, Routes } from 'react-router-dom';
import UpdateMovie from './components/UpdateMovie';
import ViewMovies from './components/ViewMovies';
import ViewMovie from './components/ViewMovie';
import AddMovie from './components/AddMovie';
import Header from './components/Header';
import Home from './components/Home';

const App = () => {
  
  return (
    <>
      <Header />
      <div className="main-container">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/add-movie" element={<AddMovie />} />
          <Route path="/view-movies" element={<ViewMovies />} />
          <Route path="/view-movie/:id" element={<ViewMovie />} />
          <Route path="/update-movie/:id" element={<UpdateMovie />} />
        </Routes>
      </div>
    </>
  )
}

export default App;