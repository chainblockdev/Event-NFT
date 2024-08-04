import React, { useRef } from 'react';
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
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
import SignOut from './components/SignOut'; // Ensure this import path is correct
import BlogDetails from './components/BlogDetails';
import ScrollToTop from './components/ScrollToTop';
import Profile from './components/Profile'; // Ensure this path matches the actual file
import { useAuth0 } from './components/Auth0Provider'; // Ensure this path is correct
import './App.css';

function App() {
  const eventListRef = useRef(null);
  const footerRef = useRef(null);
  const { isAuthenticated, loading } = useAuth0();

  if (loading) {
    return <div>Loading...</div>;
  }

  return (
    <Router>
      <ScrollToTop />
      <div className="App">
        <Routes>
          <Route path="/" element={
            <>
              <HeroSection eventListRef={eventListRef} footerRef={footerRef} />
              <EventList eventListRef={eventListRef} />
              <TicketPurchase />
              <WalletSection />
              <EventsOfTheWeek />
              <BrandsSection />
              <BlogSection />
              <FooterSection ref={footerRef} />
            </>
          } />
          <Route path="/event/:id" element={<MateraEvents />} />
          <Route path="/upcomingevents" element={<UpcomingEvents />} />
          <Route path="/cart" element={<CartPage eventListRef={eventListRef} />} />
          <Route path="/wishlist" element={<Wishlist footerRef={footerRef} />} />
          <Route path="/signin" element={<SignIn />} />
          <Route path="/signout" element={<SignOut />} />
          <Route path="/blog" element={<BlogDetails />} />
          <Route path="/profile" element={isAuthenticated ? <Profile /> : <Navigate to="/signin" />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
