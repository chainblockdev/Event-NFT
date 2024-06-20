import React from 'react';
import { useParams } from 'react-router-dom';
import logo from './Logo.png'; // Make sure this path is correct
import './EventDetail.css';

const events = [
  {
    image: '../../public/whale.png', // Path to the image
    title: 'Matera Film Festival',
    date: 'June 14',
    description: 'Scopri un\'esperienza unica con esibizioni artistiche, workshop e incontri con autori di fama internazionale.',
    location: 'Sassi di Matera',
    price: '0.0001 ETH',
    participants: [
      'https://example.com/avatar1.png',
      'https://example.com/avatar2.png',
      'https://example.com/avatar3.png'
    ]
  },
  {
    image: '../../public/whale.png', // Path to the image
    title: 'Concerto sotto le stelle',
    date: 'June 20',
    description: 'Vivi una serata magica con un concerto all\'aperto nelle suggestive cornici dei Sassi.',
    location: 'Sassi di Matera',
    price: '0.0002 ETH',
    participants: [
      'https://example.com/avatar1.png',
      'https://example.com/avatar2.png',
      'https://example.com/avatar3.png'
    ]
  },
  {
    image: '../../public/whale.png', // Path to the image
    title: 'Mostra d\'Arte Contemporanea',
    date: 'June 18',
    description: 'Esplora le opere di artisti emergenti e affermati in una mostra innovativa.',
    location: 'Sassi di Matera',
    price: '0.0003 ETH',
    participants: [
      'https://example.com/avatar1.png',
      'https://example.com/avatar2.png',
      'https://example.com/avatar3.png'
    ]
  },
  {
    image: '../../public/whale.png', // Path to the image
    title: 'Matera Film Festival',
    date: 'June 14',
    description: 'Scopri un\'esperienza unica con esibizioni artistiche, workshop e incontri con autori di fama internazionale.',
    location: 'Sassi di Matera',
    price: '0.0001 ETH',
    participants: [
      'https://example.com/avatar1.png',
      'https://example.com/avatar2.png',
      'https://example.com/avatar3.png'
    ]
  },
  {
    image: '../../public/whale.png', // Path to the image
    title: 'Concerto sotto le stelle',
    date: 'June 20',
    description: 'Vivi una serata magica con un concerto all\'aperto nelle suggestive cornici dei Sassi.',
    location: 'Sassi di Matera',
    price: '0.0002 ETH',
    participants: [
      'https://example.com/avatar1.png',
      'https://example.com/avatar2.png',
      'https://example.com/avatar3.png'
    ]
  },
  {
    image: '../../public/whale.png', // Path to the image
    title: 'Mostra d\'Arte Contemporanea',
    date: 'June 18',
    description: 'Esplora le opere di artisti emergenti e affermati in una mostra innovativa.',
    location: 'Sassi di Matera',
    price: '0.0003 ETH',
    participants: [
      'https://example.com/avatar1.png',
      'https://example.com/avatar2.png',
      'https://example.com/avatar3.png'
    ]
  },
];

const EventDetail = () => {
  const { id } = useParams();
  const event = events[id] || events[0]; // Fallback to the first event if no specific event is found

  return (
    <div className="event-detail">
      <section className="event-background" style={{ backgroundImage: `url(${event.image})` }}>
        <nav className="nav-bar">
          <div className="logo-container">
            <img src={logo} alt="EventiNFT Logo" className="logo-img" />
          </div>
          <div className="nav-links">
            <a className="nav-link" href="#eventi">Eventi</a>
            <a className="nav-link" href="#acquista">Acquista</a>
            <a className="nav-link" href="#ticket">Ticket</a>
            <a className="nav-link" href="#contatti">Contatti</a>
            <button className="wallet-button" aria-label="Connect Wallet">Connetti Wallet</button>
          </div>
        </nav>
      </section>
      <div className="event-info-bar">
        <div className="event-meta">
          <div className="event-location">{event.location}</div>
          <div className="event-date">{event.date}</div>
          <div className="event-participants">
            {event.participants.map((participant, index) => (
              <img key={index} src={participant} alt={`Participant ${index + 1}`} className="participant-avatar" />
            ))}
          </div>
          <div className="event-price">{event.price}</div>
          <button className="event-purchase-button">Acquista</button>
        </div>
      </div>
      <div className="event-description">
        <p>{event.description}</p>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis ut ligula porta, vulputate ligula vel, dictum sem. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque dolor purus, feugiat at ultricies at, pharetra imperdiet felis. Aenean sed risus risus. Nullam egestas euismod egestas. Fusce mauris velit, finibus vitae nibh eu, semper placerat sapien. Donec quam orci, auctor sit amet pulvinar sit amet, gravida id libero. Donec ut justo hendrerit, dictum eros in, auctor est. Curabitur quis augue vitae justo pretium volutpat fermentum vel arcu. Nam a malesuada magna. Donec elementum tellus lacus, id euismod neque dignissim sit amet. Aenean et molestie nulla. Nam gravida nibh metus, non elementum dui porttitor at. Vestibulum urna purus, fringilla sed bibendum eget, porttitor vitae felis. Nullam sit amet semper arcu. Vestibulum congue est velit, id porta ex eleifend in.</p>
        <p>Vestibulum finibus convallis elit, nec dapibus sapien eleifend eu. Nunc semper pellentesque justo ut erat rutrum. Integer fringilla neque ac neque hendrerit mattis. Etiam sagittis nulla vitae nunc laoreet scelerisque. Sed et porta arcu. Ut ut felis sit amet odio faucibus varius non quis ligula. Mauris eget tellus eu dolor feugiat interdum sit amet sit amet risus. Fusce porttitor erat in porttitor laoreet. Phasellus congue iaculis odio in porttitor. Vestibulum eget arcu eget eros faucibus iaculis. Fusce in varius eros, eu rhoncus metus. Suspendisse potenti. Sed id aliquam ante. Integer a enim lorem. Praesent rhoncus vulputate urna at malesuada. Nam et est orci.</p>
        <p>Vestibulum ornare eros ornare, ornare massa maximus, dictum ligula. Donec et nisl id tellus tincidunt congue. Maecenas condimentum mollis est a facilisis. Cras in turpis tempus, consectetur purus lacinia, lacinia libero. Suspendisse faucibus massa non pretium tincidunt. Etiam vitae nunc tristique, fermentum ligula eget, maximus quam. Pellentesque dictum arcu ut odio egestas accumsan.</p>
        <p>Duis ut volutpat eros, vel tempus ex. Curabitur sagittis enim ligula, ut porttitor nunc lacinia malesuada. Sed fermentum eleifend dolor. Cras maximus maximus enim in malesuada. Cras et elit accumsan, auctor risus vel, eleifend odio. Phasellus vel odio metus. Vivamus maximus purus at quam volutpat fringilla. Cras et ipsum erat sit amet elit porttitor commodo eu fermentum felis. Donec malesuada iaculis lectus, ac pharetra orci tempor eget. Vivamus egestas viverra leo volutpat varius. Suspendisse volutpat tempor libero, nec accumsan erat. In sed nisi laoreet, dignissim sapien ac, auctor dolor. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Suspendisse efficitur enim arcu, vel consectetur risus volutpat ac. Sed scelerisque interdum sodales.</p>
        <img src="https://via.placeholder.com/800x400" alt="Map" className="event-map" />
      </div>
    </div>
  );
};

export default EventDetail;
