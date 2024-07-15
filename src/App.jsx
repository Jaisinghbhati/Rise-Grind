import React from 'react';
import './index.css'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './Components/Navbar';
import Menu from './Components/Menu';
import ContactForm from './Components/ContactForm';
import Blog from './Components/Blog';
import HomePage from './Components/HomePage';
import Footer from './Components/Footer';

const App = () => {
  return (
    <Router>
      <div>
        <Navbar />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/menu" element={<Menu />} />
          <Route path="/contactform" element={<ContactForm />} />
          <Route path="/blog" element={<Blog />} />
        </Routes>
        <Footer/>
      </div>
    </Router>
  );
}

export default App;
