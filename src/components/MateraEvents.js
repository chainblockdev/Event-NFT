import React, { useEffect, useRef } from 'react';
import { useParams, useNavigate, Link } from 'react-router-dom';
import FooterSection from './FooterSection';
import TicketPurchase from './TicketPurchase';
import WalletSection from './WalletSection'; // Import WalletSection
import logo from './Logo.png';
import locationIcon from '../assets/icons/location-icon.png';
import dateIcon from '../assets/icons/date-icon.png';
import avatar1 from '../assets/avatars/1.png';
import avatar2 from '../assets/avatars/2.png';
import avatar3 from '../assets/avatars/3.png';
import avatar4 from '../assets/avatars/4.png';
import avatar5 from '../assets/avatars/5.png';
import avatar6 from '../assets/avatars/6.png';
import mapImage from '../assets/Map.png';
import relatedImage1 from '../assets/event/image1.jpg';
import relatedImage2 from '../assets/event/image2.jpg';
import relatedImage3 from '../assets/event/image3.jpg';
import categoryImage1 from '../assets/category/Concert.png';
import categoryImage2 from '../assets/category/Sports.png';
import categoryImage3 from '../assets/category/art.png';
import categoryImage4 from '../assets/category/Family.png';
import './MateraEvents.css';

const events = [
  {
    image: './image1.jpg',
    title: 'Matera Film Festival',
    date: 'June 14',
    location: 'Sassi di Matera',
    description: 'Scopri un\'esperienza unica con esibizioni artistiche, workshop e incontri con autori di fama internazionale.',
    price: '0.0001 ETH',
    participants: [
      avatar1,
      avatar2,
      avatar3,
      avatar4,
      avatar5,
      avatar6
    ]
  },
  {
    image: './image2.jpg',
    title: 'Concerto sotto le stelle',
    date: 'June 20',
    location: 'Sassi di Matera',
    description: 'Vivi una serata magica con un concerto all\'aperto nelle suggestive cornici dei Sassi.',
    price: '0.0001 ETH',
    participants: [
      avatar1,
      avatar2,
      avatar3,
      avatar4,
      avatar5,
      avatar6
    ]
  },
  {
    image: './image3.jpg',
    title: 'Mostra d\'Arte Contemporanea',
    date: 'June 18',
    location: 'Sassi di Matera',
    description: 'Esplora le opere di artisti emergenti e affermati in una mostra innovativa.',
    price: '0.0003 ETH',
    participants: [
      avatar1,
      avatar2,
      avatar3,
      avatar4,
      avatar5,
      avatar6
    ]
  },
  // Hidden events
  {
    image: './image1.jpg',
    title: 'Evento Nascosto 1',
    date: 'July 1',
    location: 'Sassi di Matera',
    description: 'Descrizione evento nascosto 1.',
    price: '0.0001 ETH',
    participants: [
      avatar1,
      avatar2,
      avatar3,
      avatar4,
      avatar5,
      avatar6
    ]
  },
  {
    image: './image2.jpg',
    title: 'Evento Nascosto 2',
    date: 'July 2',
    location: 'Sassi di Matera',
    description: 'Descrizione evento nascosto 2.',
    price: '0.0001 ETH',
    participants: [
      avatar1,
      avatar2,
      avatar3,
      avatar4,
      avatar5,
      avatar6
    ]
  },
  {
    image: './image3.jpg',
    title: 'Evento Nascosto 3',
    date: 'July 3',
    location: 'Sassi di Matera',
    description: 'Descrizione evento nascosto 3.',
    price: '0.0001 ETH',
    participants: [
      avatar1,
      avatar2,
      avatar3,
      avatar4,
      avatar5,
      avatar6
    ]
  }
];

const relatedEvents = [
  {
    image: relatedImage1,
    title: 'Matera Film Festival',
    date: 'June 14',
    description: 'Scopri un\'esperienza unica con esibizioni artistiche, workshop e incontri con autori di fama internazionale.',
  },
  {
    image: relatedImage2,
    title: 'Concerto sotto le stelle',
    date: 'June 20',
    description: 'Vivi una serata magica con un concerto all\'aperto nelle suggestive cornici dei Sassi.',
  },
  {
    image: relatedImage3,
    title: 'Mostra d\'Arte Contemporanea',
    date: 'June 18',
    description: 'Esplora le opere di artisti emergenti e affermati in una mostra innovativa.',
  },
  // Add more related events as needed
];

const categories = [
  {
    image: categoryImage1,
    title: 'Concert'
  },
  {
    image: categoryImage2,
    title: 'Sports'
  },
  {
    image: categoryImage3,
    title: 'Theater'
  },
  {
    image: categoryImage4,
    title: 'Family'
  },
  // Add more categories as needed
];

const MateraEvents = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const eventDetailsRef = useRef(null);

  const event = events[id] || events[0];

  useEffect(() => {
    if (eventDetailsRef.current) {
      eventDetailsRef.current.scrollIntoView({ behavior: 'smooth' });
    }
  }, [id]);

  const handleAcquistaClick = () => {
    navigate('/cart', { state: { event } });
  };
  
  

  if (!event) {
    return <div>Event not found</div>;
  }

  return (
    <>
      <div className="event-background">
        <nav className="nav-barEventDetail">
          <div className="logo-containerEventDetail">
            <Link to="/">
              <img src={logo} alt="EventiNFT Logo" className="logo-imgEventDetail" />
            </Link>
          </div>
          <div className="nav-linksEventDetail">
            <Link className="nav-linkEventDetail" to="/upcomingevents">Eventi</Link>
            <a className="nav-linkEventDetail" href="#acquista">Acquista</a>
            <a className="nav-linkEventDetail" href="#ticket">Ticket</a>
            <a className="nav-linkEventDetail" href="#contatti">Contatti</a>
            <button className="wallet-buttonEventDetail" aria-label="Connect Wallet">Connetti Wallet</button>
            <Link to="/cart" className="nav-icon">
              <svg xmlns="http://www.w3.org/2000/svg" width="21" height="21" viewBox="0 0 21 21" fill="none">
                <path d="M1.60352 1.61035H4.98672L6.19204 13.5873C6.24214 13.9174 6.40995 14.2184 6.66454 14.4347C6.91913 14.6509 7.24335 14.768 7.57747 14.7642H16.3056C16.6078 14.78 16.9067 14.6965 17.1569 14.5264C17.4071 14.3564 17.5947 14.1092 17.6911 13.8227L19.5337 8.2842C19.6025 8.07599 19.6208 7.85441 19.5871 7.63774C19.5533 7.42108 19.4686 7.21552 19.3397 7.03804C19.2056 6.84929 19.0263 6.69716 18.8181 6.59557C18.61 6.49398 18.3797 6.44616 18.1483 6.45651H5.47162" stroke="white" strokeWidth="1.42857" strokeLinecap="round" strokeLinejoin="round"/>
                <path d="M16.0701 19.6104C15.8864 19.6104 15.7102 19.5375 15.5803 19.4077C15.4504 19.2778 15.3774 19.1017 15.3774 18.9181C15.3774 18.7345 15.4504 18.5584 15.5803 18.4286C15.7102 18.2988 15.8864 18.2258 16.0701 18.2258C16.2538 18.2258 16.43 18.2988 16.5599 18.4286C16.6899 18.5584 16.7628 18.7345 16.7628 18.9181C16.7628 19.1017 16.6899 19.2778 16.5599 19.4077C16.43 19.5375 16.2538 19.6104 16.0701 19.6104Z" fill="white" stroke="white" strokeWidth="1.42857" strokeLinecap="round" strokeLinejoin="round"/>
                <path d="M7.06484 19.6104C6.88112 19.6104 6.70493 19.5375 6.57502 19.4077C6.44511 19.2778 6.37213 19.1017 6.37213 18.9181C6.37213 18.7345 6.44511 18.5584 6.57502 18.4286C6.70493 18.2988 6.88112 18.2258 7.06484 18.2258C7.24856 18.2258 7.42476 18.2988 7.55467 18.4286C7.68457 18.5584 7.75756 18.7345 7.75756 18.9181C7.75756 19.1017 7.68457 19.2778 7.55467 19.4077C7.42476 19.5375 7.24856 19.6104 7.06484 19.6104Z" fill="white" stroke="white" strokeWidth="1.42857" strokeLinecap="round" strokeLinejoin="round"/>
                <path d="M10.1654 9.22583V11.9951" stroke="white" strokeWidth="1.42857" strokeLinecap="round" strokeLinejoin="round"/>
                <path d="M14.3217 9.22583V11.9951" stroke="white" strokeWidth="1.42857" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </Link>
            <Link to="/signin" className="nav-icon">
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none">
                <path fillRule="evenodd" clipRule="evenodd" d="M7.09456 5.30882C7.85943 4.54395 8.89682 4.11425 9.97851 4.11425C11.0602 4.11425 12.0976 4.54395 12.8625 5.30882C13.6273 6.0737 14.057 7.11108 14.057 8.19278C14.057 9.27447 13.6273 10.3119 12.8625 11.0767C12.0976 11.8416 11.0602 12.2713 9.97851 12.2713C8.89682 12.2713 7.85943 11.8416 7.09456 11.0767C6.32969 10.3119 5.89999 9.27447 5.89999 8.19278C5.89999 7.11108 6.32969 6.0737 7.09456 5.30882ZM9.97851 5.49447C9.26288 5.49447 8.57655 5.77875 8.07052 6.28478C7.56449 6.79081 7.2802 7.47714 7.2802 8.19278C7.2802 8.90841 7.56449 9.59474 8.07052 10.1008C8.57655 10.6068 9.26288 10.8911 9.97851 10.8911C10.6942 10.8911 11.3805 10.6068 11.8865 10.1008C12.3925 9.59474 12.6768 8.90841 12.6768 8.19278C12.6768 7.47714 12.3925 6.79081 11.8865 6.28478C11.3805 5.77875 10.6942 5.49447 9.97851 5.49447Z" fill="white"/>
                <path fillRule="evenodd" clipRule="evenodd" d="M9.97852 14.3062C8.93439 14.3062 7.90782 14.5748 6.99749 15.0862C6.08716 15.5975 5.32368 16.3345 4.78045 17.2262C4.58215 17.5517 4.15754 17.6548 3.83205 17.4565C3.50656 17.2582 3.40345 16.8336 3.60174 16.5081C4.26816 15.4142 5.20476 14.5101 6.32151 13.8828C7.43827 13.2555 8.69762 12.926 9.97852 12.926C11.2594 12.926 12.5188 13.2555 13.6355 13.8828C14.7523 14.5101 15.6889 15.4142 16.3553 16.5081C16.5536 16.8336 16.4505 17.2582 16.125 17.4565C15.7995 17.6548 15.3749 17.5517 15.1766 17.2262C14.6334 16.3345 13.8699 15.5975 12.9595 15.0862C12.0492 14.5748 11.0226 14.3062 9.97852 14.3062Z" fill="white" />
                <path fillRule="evenodd" clipRule="evenodd" d="M3.261 3.50832C5.0426 1.72672 7.45896 0.72583 9.97852 0.72583C12.4981 0.72583 14.9144 1.72672 16.696 3.50832C18.4776 5.28991 19.4785 7.70627 19.4785 10.2258C19.4785 12.7454 18.4776 15.1617 16.696 16.9433C14.9144 18.7249 12.4981 19.7258 9.97852 19.7258C7.45896 19.7258 5.0426 18.7249 3.261 16.9433C1.47941 15.1617 0.478516 12.7454 0.478516 10.2258C0.478516 7.70627 1.47941 5.28991 3.261 3.50832ZM9.97852 2.10605C7.82502 2.10605 5.75972 2.96152 4.23696 4.48428C2.71421 6.00703 1.85873 8.07233 1.85873 10.2258C1.85873 12.3793 2.71421 14.4446 4.23696 15.9674C5.75972 17.4901 7.82502 18.3456 9.97852 18.3456C12.132 18.3456 14.1973 17.4901 15.7201 15.9674C17.2428 14.4446 18.0983 12.3793 18.0983 10.2258C18.0983 8.07233 17.2428 6.00703 15.7201 4.48428C14.1973 2.96152 12.132 2.10605 9.97852 2.10605Z" fill="white"/>
              </svg>
            </Link>
          </div>
        </nav>
      </div>
      <div ref={eventDetailsRef} className="event-info-barEventDetail">
        <div className="event-meta">
          <div className="event-location-date">
            <div className="event-location">
              <img src={locationIcon} alt="Location Icon" className="icon" />
              {event.location}
            </div>
            <div className="event-date">
              <img src={dateIcon} alt="Date Icon" className="icon" />
              {event.date}
            </div>
          </div>
          <div className="event-participants">
            <div className="label">Partecipanti</div>
            <div className="participant-avatar-container">
              {event.participants.map((participant, index) => (
                <div
                  key={index}
                  className="participant-avatar"
                  style={{ backgroundImage: `url(${participant})` }}
                >
                  {index === event.participants.length - 1 && (
                    <span className="participant-count">1.5k</span>
                  )}
                </div>
              ))}
            </div>
          </div>
          <div className="event-price-container">
            <div className="price-label">Prezzo</div>
            <div className="event-price">{event.price}</div>
          </div>
          <button className="event-purchase-MateraEvents-button" onClick={handleAcquistaClick}>Acquista</button>
        </div>
      </div>
      <div className="event-description">
        <p>{event.description}</p>
        {/* Additional detailed description */}
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis ut ligula porta, vulputate ligula vel, dictum sem. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque dolor purus, feugiat at ultricies at, pharetra imperdiet felis. Aenean sed risus risus. Nullam egestas euismod egestas. Fusce mauris velit, finibus vitae nibh eu, semper placerat sapien. Donec quam orci, auctor sit amet pulvinar sit amet, gravida et libero. Donec ut justo hendrerit, dictum eros in, auctor est. Curabitur quis augue vitae justo pretium volutpat fermentum vel arcu. Nam a malesuada magna. Donec elementum tellus lacus, id euismod neque dignissim ut. Aenean ut molestie nulla. Nam gravida nibh metus, non elementum dui porttitor at. Vestibulum urna purus, fringilla sed bibendum eget, porttitor vitae felis. Nullam sit amet semper arcu. Vestibulum congue est velit, id porta ex eleifend in.</p>
        <p>Vestibulum finibus convallis elit, nec dapibus sapien eleifend eu. Nunc semper pellentesque justo sit amet rutrum. Integer fringilla neque ac neque hendrerit mattis. Etiam sagittis nulla vitae nunc laoreet scelerisque. Sed ut porta arcu. Ut ut felis sit amet odio faucibus varius non quis ligula. Mauris eget tellus eu dolor feugiat interdum sit amet vitae risus. Fusce porttitor erat in porttitor laoreet. Phasellus congue iaculis odio in interdum. Vestibulum eget arcu eget eros faucibus iaculis. Fusce in varius eros, eu rhoncus metus. Suspendisse potenti. Sed et aliquam ante. Integer a enim lorem. Praesent rhoncus vulputate urna at malesuada. Nam et est orci.</p>
        <p>Vestibulum ornare eros ornare, ornare massa maximus, dictum ligula. Donec et nisl id tellus tincidunt congue. Maecenas condimentum mollis est eu facilisis. Cras in turpis tempus, consectetur purus lacinia, lacinia libero. Suspendisse faucibus massa non pretium tincidunt. Etiam vitae nunc tristique, fermentum dui euismod, accumsan quam. Pellentesque dictum arcu ut odio egestas accumsan.</p>
        <p>Duis ut volutpat eros, vel tempus ex. Curabitur sagittis enim ligula, ut porttitor nunc lacinia malesuada. Sed fermentum eleifend dolor. Cras maximus maximus enim a mollis. Sed at tellus accumsan, auctor risus vel, eleifend odio. Phasellus vel odio metus. Vivamus maximus purus at quam volutpat tincidunt. Cras et turpis sit amet elit porttitor commodo eu fermentum felis.</p>
        <p>Donec molestie iaculis lectus, nec pharetra ante laoreet eget. Maecenas congue viverra leo vulputate varius. Suspendisse vitae tempor libero, nec accumsan erat. In sed nisi laoreet, dignissim sapien eu, auctor dolor. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Suspendisse efficitur enim arcu, vel consectetur risus volutpat ac. Sed scelerisque interdum sodales.</p>
      </div>
      <img src={mapImage} alt="Map" className="event-map" />
      <TicketPurchase />
      <div className="related-section-MateraEvents">
        <h2 className="related-title-MateraEvents">Potrebbero interessarti anche...</h2>
        <div className="related-cards-MateraEvents">
          {relatedEvents.map((relatedEvent, index) => (
            <div key={index} className="related-card-MateraEvents">
              <img src={relatedEvent.image} alt={relatedEvent.title} className="related-card-image-MateraEvents" />
              <div className="related-card-info-MateraEvents">
                <div className="related-card-date-MateraEvents">
                  <span className="related-card-month-MateraEvents">{relatedEvent.date.split(' ')[0].toUpperCase()}</span>
                  <span className="related-card-day-MateraEvents">{relatedEvent.date.split(' ')[1]}</span>
                </div>
                <div className="related-card-content-MateraEvents">
                  <h3 className="related-card-title-MateraEvents">{relatedEvent.title}</h3>
                  <p className="related-card-description-MateraEvents">{relatedEvent.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
        <div className="related-pagination-MateraEvents">
          <span className="dot"></span>
          <span className="dot"></span>
          <span className="dot"></span>
        </div>
      </div>
      <WalletSection /> {/* Replace the previous wallet section with WalletSection component */}
      <div className="category-section-MateraEvents">
        <h2 className="category-title-MateraEvents">Cerca Per Categoria</h2>
        <div className="category-cards-MateraEvents">
          {categories.map((category, index) => (
            <div key={index} className="category-card-MateraEvents">
              <img src={category.image} alt={category.title} className="category-card-image-MateraEvents" />
              <div className="category-card-label-MateraEvents">{category.title}</div>
            </div>
          ))}
        </div>
      </div>
      <FooterSection />
    </>
  );
};

export default MateraEvents;
