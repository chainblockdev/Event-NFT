// src/App.js
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import HeroSection from './components/HeroSection';
import EventList from './components/EventList';
import TicketPurchase from './components/TicketPurchase';
import WalletSection from './components/WalletSection';
import EventsOfTheWeek from './components/EventsOfTheWeek';
import BrandsSection from './components/BrandsSection';
import BlogSection from './components/BlogSection';
import FooterSection from './components/FooterSection';
import MateraEvents from './components/MateraEvents';
import UpcomingEvents from './components/UpcomingEvents';
import CartPage from './components/CartPage';
import Wishlist from './components/Wishlist';
import SignIn from './components/SignIn';
import SignOut from './components/SignOut';
import BlogDetails from './components/BlogDetails';
import './App.css';

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/" element={
            <>
              <HeroSection />
              <EventList />
              <TicketPurchase />
              <WalletSection />
              <EventsOfTheWeek />
              <BrandsSection />
              <BlogSection />
              <FooterSection />
            </>
          } />
          <Route path="/event/:id" element={<MateraEvents />} />
          <Route path="/upcomingevents" element={<UpcomingEvents />} />
          <Route path="/cart" element={<CartPage />} />
          <Route path="/profile" element={<Wishlist />} />
          <Route path="/signin" element={<SignIn />} />
          <Route path="/signout" element={<SignOut />} />
          <Route path="/blog" element={<BlogDetails />} /> {/* Static route for BlogDetails */}
        </Routes>
      </div>
    </Router>
  );
}

export default App;
