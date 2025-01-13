import React from 'react';
import {
  BrowserRouter as Router,
  Route,
  Link,
  Routes
} from "react-router-dom";

import CounterExample from './Components/CounterExample';
import Header from './Components/Header';
import Footer from './Components/Footer';
import About from './Views/About';
import Home from './Views/Home';
import Contact from './Views/Contact';
import Products from './Views/Products';

function App() {
  return (

    <div className="relative pb-10 min-h-screen">
      <Router>
      <Header/>
      <div className='p-3'>
      <Routes>
      <Route exact path="/" element={<Home/>} />
      <Route path="/about" element={<About/>} />
      <Route path="/contact" element={<Contact/>} />
      <Route path="/products/:id" element={<Products/>} />

      </Routes>
      </div>
      <Footer/>

      </Router>
      
    </div>
  );
}

export default App;
