import './App.scss';
import Home from './pages/Home';
import Dashboard from './pages/Dashboard'
import Navbar from './components/Navbar'
import {  BrowserRouter, Route, Routes } from 'react-router-dom';
import { keepTheme } from './themes';
import React, { useEffect } from 'react';
import Footer from './components/Footer';

function App() {

  useEffect(() => {
    keepTheme();
})


  return (
    <div className="App">
            <BrowserRouter>


    <Navbar/>
    <main>

    <Routes>
        <Route exact path='/' element={<Home/>} />
        <Route  exact  path='/dashboard' element={<Dashboard/>} />
    </Routes>
      </main>
  <Footer />
        </BrowserRouter>
    </div>
  );
}

export default App;
