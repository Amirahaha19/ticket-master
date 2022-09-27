import Navbar from './components/Navbar.js';
import Header from './components/Header.js';
// import Upcoming from './components/Upcoming.js';
// import PhotoCarousel from './components/Carousel.js';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';

import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Ticket from "./components/Ticket.js";
import Home from "./components/Home.js";
import Purchase from "./components/Purchase.js";
import Billing from "./components/Billing.js";
import Checkout from "./components/Checkout.js";

import './App.css';


function App() {

  const slides = [
    { url: 'photo1.jpg', title: 'Taylor Swift Concert', 
        date:'16 Dec 2022 (Fri.)', 
        place: 'The Theatre at Mediacorp', 
        rating: 'M18', 
        duration: '90',
        price: 128},
    { url: 'photo2.jpg', title: 'TWICE Concert'},
    { url: 'photo3.jpg', title: 'Ed Sheeran Concert'},
  ];

  return (
    <div className="App">
      <Navbar />
      <Header />

      <Router>
        <Routes>
          <Route exact path="/" element={<Home slides={slides} />} />
          <Route exact path="/ticket" element={<Ticket slides={slides} />} />
          <Route exact path="/purchase" element={<Purchase slides={slides} />} />
          <Route exact path="/billing" element={<Billing slides={slides} />} />
          <Route exact path="/checkout" element={<Checkout slides={slides} />} />
        </Routes>
      </Router>
    
    </div>
  );
};

export default App;
