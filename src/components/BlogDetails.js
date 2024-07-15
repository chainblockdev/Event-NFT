// src/components/BlogDetails.js
import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import './BlogDetails.css';
import logo from '../assets/icons/Logo.png';
import blogBackground from '../assets/background/blog.png';
import filterIcon from '../assets/icons/filter.svg';
import EventsOfTheWeek from './EventsOfTheWeek'; // Import the EventsOfTheWeek component
import WalletSection from './WalletSection'; // Import WalletSection

const BlogDetails = () => {
  const navigate = useNavigate(); // Hook to programmatically navigate

  const blog = {
    image: blogBackground,
    title: 'Blog',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
    date: '12 Mar',
    author: 'John Doe',
    content: 'Full content of the blog post goes here...'
  };

  const blogs = [
    {
      id: 1,
      image: '/blog1.jpg',
      title: '6 Strategies to Find Your Conference Keynote and Other Speakers',
      description: 'Sekarang, kamu bisa produksi tiket fisik untuk eventmu bersama Bostiketbos. Hanya perlu mengikuti beberapa langkah mudah.',
      date: '12 Mar',
      author: 'John Doe'
    },
    {
      id: 2,
      image: '/blog2.jpg',
      title: 'How Successfully Used Paid Marketing to Drive Incremental Ticket Sales',
      description: 'Sekarang, kamu bisa produksi tiket fisik untuk eventmu bersama Bostiketbos. Hanya perlu mengikuti beberapa langkah mudah.',
      date: '12 Mar',
      author: 'John Doe'
    },
    {
      id: 3,
      image: '/blog3.jpg',
      title: 'Introducing Workspaces: Work smarter, not harder with new navigation',
      description: 'Sekarang, kamu bisa produksi tiket fisik untuk eventmu bersama Bostiketbos. Hanya perlu mengikuti beberapa langkah mudah.',
      date: '12 Mar',
      author: 'John Doe'
    },
    {
      id: 4,
      image: '/blog1.jpg',
      title: '6 Strategies to Find Your Conference Keynote and Other Speakers',
      description: 'Sekarang, kamu bisa produksi tiket fisik untuk eventmu bersama Bostiketbos. Hanya perlu mengikuti beberapa langkah mudah.',
      date: '13 Mar',
      author: 'Jane Smith'
    },
    {
      id: 5,
      image: '/blog2.jpg',
      title: 'How Successfully Used Paid Marketing to Drive Incremental Ticket Sales',
      description: 'Sekarang, kamu bisa produksi tiket fisik untuk eventmu bersama Bostiketbos. Hanya perlu mengikuti beberapa langkah mudah.',
      date: '14 Mar',
      author: 'Alice Brown'
    },
    {
      id: 6,
      image: '/blog3.jpg',
      title: 'Introducing Workspaces: Work smarter, not harder with new navigation',
      description: 'Sekarang, kamu bisa produksi tiket fisik untuk eventmu bersama Bostiketbos. Hanya perlu mengikuti beberapa langkah mudah.',
      date: '15 Mar',
      author: 'Bob Johnson'
    },
  ];

  const handleProfileClick = () => {
    navigate('/SignIn'); // Navigate to SignIn page
  };

  return (
    <div className="BlogDetails-blog-details-container">
      <div className="BlogDetails-blog-header-container" style={{ backgroundImage: `url(${blog.image})` }}>
        <nav className="BlogDetails-navbar">
          <div className="BlogDetails-logo">
            <img src={logo} alt="Logo" />
          </div>
          <div className="BlogDetails-nav-links">
            <Link to="/upcomingevents">Eventi</Link>
            <span>Acquista</span>
            <span>Ticket</span>
            <span>Contatti</span>
          </div>
          <button className="BlogDetails-wallet-button">Connetti Wallet</button>
          <div className="BlogDetails-icons">
            <Link to="/cart" className="cart-icon">
              <svg xmlns="http://www.w3.org/2000/svg" width="21" height="20" viewBox="0 0 21 20" fill="none">
                <path d="M1.41504 1.1189H4.79825L6.00356 13.0958C6.05366 13.426 6.22147 13.7269 6.47606 13.9432C6.73065 14.1595 7.05487 14.2765 7.38899 14.2727H16.1172C16.4193 14.2885 16.7182 14.205 16.9684 14.035C17.2186 13.865 17.4062 13.6178 17.5026 13.3312L19.3452 7.79274C19.414 7.58453 19.4323 7.36296 19.3986 7.14629C19.3649 6.92962 19.2801 6.72407 19.1512 6.54659C19.0171 6.35784 18.8378 6.20571 18.6296 6.10411C18.4215 6.00252 18.1912 5.95471 17.9598 5.96505H5.28314" stroke="white" stroke-width="1.42857" stroke-linecap="round" stroke-linejoin="round"/>
                <path d="M15.8812 19.119C15.6975 19.119 15.5213 19.0461 15.3914 18.9162C15.2615 18.7864 15.1885 18.6103 15.1885 18.4267C15.1885 18.2431 15.2615 18.067 15.3914 17.9371C15.5213 17.8073 15.6975 17.7344 15.8812 17.7344C16.0649 17.7344 16.2411 17.8073 16.371 17.9371C16.5009 18.067 16.5739 18.2431 16.5739 18.4267C16.5739 18.6103 16.5009 18.7864 16.371 18.9162C16.2411 19.0461 16.0649 19.119 15.8812 19.119Z" fill="white" stroke="white" stroke-width="1.42857" stroke-linecap="round" stroke-linejoin="round"/>
                <path d="M6.87631 19.119C6.69259 19.119 6.51639 19.0461 6.38648 18.9162C6.25658 18.7864 6.18359 18.6103 6.18359 18.4267C6.18359 18.2431 6.25658 18.067 6.38648 17.9371C6.51639 17.8073 6.69259 17.7344 6.87631 17.7344C7.06002 17.7344 7.23622 17.8073 7.36613 17.9371C7.49604 18.067 7.56902 18.2431 7.56902 18.4267C7.56902 18.6103 7.49604 18.7864 7.36613 18.9162C7.23622 19.0461 7.06002 19.119 6.87631 19.119Z" fill="white" stroke="white" stroke-width="1.42857" stroke-linecap="round" stroke-linejoin="round"/>
                <path d="M9.97656 8.73438V11.5036" stroke="white" stroke-width="1.42857" stroke-linecap="round" stroke-linejoin="round"/>
                <path d="M14.1328 8.73438V11.5036" stroke="white" stroke-width="1.42857" stroke-linecap="round" stroke-linejoin="round"/>
              </svg>
            </Link>
            <button className="profile-icon" onClick={handleProfileClick}>
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none">
                <path fill-rule="evenodd" clip-rule="evenodd" d="M6.90608 4.81737C7.67096 4.0525 8.70835 3.62279 9.79004 3.62279C10.8717 3.62279 11.9091 4.0525 12.674 4.81737C13.4389 5.58224 13.8686 6.61963 13.8686 7.70132C13.8686 8.78302 13.4389 9.82041 12.674 10.5853C11.9091 11.3501 10.8717 11.7799 9.79004 11.7799C8.70835 11.7799 7.67096 11.3501 6.90608 10.5853C6.14121 9.82041 5.71151 8.78302 5.71151 7.70132C5.71151 6.61963 6.14121 5.58224 6.90608 4.81737ZM9.79004 5.00301C9.0744 5.00301 8.38808 5.2873 7.88204 5.79333C7.37601 6.29936 7.09173 6.98569 7.09173 7.70132C7.09173 8.41696 7.37601 9.10328 7.88204 9.60932C8.38808 10.1153 9.0744 10.3996 9.79004 10.3996C10.5057 10.3996 11.192 10.1153 11.698 9.60932C12.2041 9.10328 12.4883 8.41696 12.4883 7.70132C12.4883 6.98569 12.2041 6.29936 11.698 5.79333C11.192 5.2873 10.5057 5.00301 9.79004 5.00301Z" fill="white"/>
                <path fill-rule="evenodd" clip-rule="evenodd" d="M9.79004 13.8148C8.74591 13.8148 7.71934 14.0833 6.80901 14.5947C5.89868 15.1061 5.1352 15.843 4.59197 16.7347C4.39368 17.0602 3.96906 17.1633 3.64357 16.965C3.31808 16.7667 3.21497 16.3421 3.41327 16.0166C4.07968 14.9228 5.01628 14.0187 6.13304 13.3914C7.24979 12.764 8.50915 12.4345 9.79004 12.4345C11.0709 12.4345 12.3303 12.764 13.447 13.3914C14.5638 14.0187 15.5004 14.9228 16.1668 16.0166C16.3651 16.3421 16.262 16.7667 15.9365 16.965C15.611 17.1633 15.1864 17.0602 14.9881 16.7347C14.4449 15.843 13.6814 15.1061 12.7711 14.5947C11.8607 14.0833 10.8342 13.8148 9.79004 13.8148Z" fill="white"/>
                <path fill-rule="evenodd" clip-rule="evenodd" d="M3.07252 3.01686C4.85412 1.23527 7.27048 0.234375 9.79004 0.234375C12.3096 0.234375 14.726 1.23527 16.5076 3.01686C18.2892 4.79846 19.29 7.21482 19.29 9.73438C19.29 12.2539 18.2892 14.6703 16.5076 16.4519C14.726 18.2335 12.3096 19.2344 9.79004 19.2344C7.27048 19.2344 4.85412 18.2335 3.07252 16.4519C1.29093 14.6703 0.290039 12.2539 0.290039 9.73438C0.290039 7.21482 1.29093 4.79846 3.07252 3.01686ZM9.79004 1.61459C7.63654 1.61459 5.57124 2.47007 4.04849 3.99282C2.52573 5.51558 1.67026 7.58087 1.67026 9.73438C1.67026 11.8879 2.52573 13.9532 4.04849 15.4759C5.57124 16.9987 7.63654 17.8542 9.79004 17.8542C11.9435 17.8542 14.0088 16.9987 15.5316 15.4759C17.0543 13.9532 17.9098 11.8879 17.9098 9.73438C17.9098 7.58087 17.0543 5.51558 15.5316 3.99282C14.0088 2.47007 11.9435 1.61459 9.79004 1.61459Z" fill="white"/>
              </svg>
            </button>
          </div>
        </nav>
        <div className="BlogDetails-blog-header-content">
          <h1>{blog.title}</h1>
          <p>{blog.description}</p>
        </div>
      </div>
      <div className="BlogDetails-blog-content-container">
        <div className="BlogDetails-blog-filter-container">
          <img src={filterIcon} alt="Filter" />
          <span>Filtri</span>
        </div>
        <div className="BlogDetails-blog-blog-list">
          {blogs.map((blog) => (
            <Link to={`/BlogSection/${blog.id}`} key={blog.id} className="BlogDetails-blog-blog-card-link">
              <div className="BlogDetails-blog-blog-card">
                <img src={blog.image} alt={blog.title} className="BlogDetails-blog-blog-image" />
                <div className="BlogDetails-blog-blog-content">
                  <h3 className="BlogDetails-blog-blog-title">{blog.title}</h3>
                  <p className="BlogDetails-blog-blog-description">{blog.description}</p>
                  <p className="BlogDetails-blog-blog-meta">{blog.date} - {blog.author}</p>
                </div>
              </div>
            </Link>
          ))}
        </div>
        <button className="BlogDetails-blog-read-more-button">Leggi tutto</button>
      </div>
      <div className="EventsOfTheWeek-container no-icons">
        <EventsOfTheWeek /> {/* Add the EventsOfTheWeek component here */}
      </div>
      <div className="searchbar-blogdetails-blog">
        <div className="searchbar-blogdetails-blog-item">
          <p>Tipo di Evento</p>
          <p>Concerto Jazz</p>
          <div className="underline"></div>
        </div>
        <div className="searchbar-blogdetails-blog-item">
          <p>Luogo</p>
          <p>Sassi di Matera</p>
          <div className="underline"></div>
        </div>
        <div className="searchbar-blogdetails-blog-item">
          <p>Data</p>
          <p className="date-with-icon">Luglio <svg xmlns="http://www.w3.org/2000/svg" width="13" height="8" viewBox="0 0 13 8" fill="none"><path d="M1.3916 1.69263L6.40082 6.69263L11.41 1.69263" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/></svg></p>
          <div className="underline"></div>
        </div>
      </div>
      {/* Add WalletSection */}
      <WalletSection />
    </div>
  );
};

export default BlogDetails;
