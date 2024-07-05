import React from 'react';
import { useParams } from 'react-router-dom';
import FooterSection from './FooterSection';
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
import icon1 from '../assets/icons/Add to Favorites.png';
import icon2 from '../assets/icons/Wallet.png';
import icon3 from '../assets/icons/NFT.png';
import relatedImage1 from '../assets/event/image1.jpg';
import relatedImage2 from '../assets/event/image2.jpg';
import relatedImage3 from '../assets/event/image3.jpg';
import walletImage from '../assets/wallet.png';
import categoryImage1 from '../assets/category/Concert.png';
import categoryImage2 from '../assets/category/Sports.png';
import categoryImage3 from '../assets/category/art.png';
import categoryImage4 from '../assets/category/Family.png';
import './MateraEvents.css';

const events = [
  {
    title: 'Matera Film Festival',
    date: 'June 14',
    description: 'Scopri un\'esperienza unica con esibizioni artistiche, workshop e incontri con autori di fama internazionale.',
    location: 'Sassi di Matera',
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
    title: 'Concerto sotto le stelle',
    date: 'June 20',
    description: 'Vivi una serata magica con un concerto all\'aperto nelle suggestive cornici dei Sassi.',
    location: 'Sassi di Matera',
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
    title: 'Mostra d\'Arte Contemporanea',
    date: 'June 18',
    description: 'Esplora le opere di artisti emergenti e affermati in una mostra innovativa.',
    location: 'Sassi di Matera',
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
  // Add more events as needed
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
  const event = events[id] || events[0]; // Fallback to the first event if no specific event is found

  if (!event) {
    return <div>Event not found</div>; // Handle case where event is not found
  }

  return (
    <>
      <div className="event-background">
        <nav className="nav-barEventDetail">
          <div className="logo-containerEventDetail">
            <img src={logo} alt="EventiNFT Logo" className="logo-imgEventDetail" />
          </div>
          <div className="nav-linksEventDetail">
            <a className="nav-linkEventDetail" href="/upcomingevents">Eventi</a> {/* Updated */}
            <a className="nav-linkEventDetail" href="#acquista">Acquista</a>
            <a className="nav-linkEventDetail" href="#ticket">Ticket</a>
            <a className="nav-linkEventDetail" href="#contatti">Contatti</a>
            <button className="wallet-buttonEventDetail" aria-label="Connect Wallet">Connetti Wallet</button>
          </div>
        </nav>
      </div>
      <div className="event-info-barEventDetail">
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
    <button className="event-purchase-MateraEvents-button">Acquista</button>
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
      <div className="purchase-section-MateraEvents">
        <h2 className="purchase-title-MateraEvents">Acquista il tuo biglietto in 3 click</h2>
        <div className="purchase-cards-MateraEvents">
          <div className="purchase-card-MateraEvents">
            <img src={icon1} alt="Star Icon" className="icon-MateraEvents" />
            <h3>Scegli l'evento a cui partecipare</h3>
            <p>Grazie alla tecnologia NFT (Non-Fungible Token), puoi acquistare biglietti unici e collezionabili per una vasta gamma di eventi culturali, concerti, spettacoli e molto altro.</p>
          </div>
          <div className="purchase-card-MateraEvents">
            <img src={icon2} alt="Wallet Icon" className="icon-MateraEvents" />
            <h3>Crea e connetti il tuo wallet</h3>
            <p>Grazie alla tecnologia NFT (Non-Fungible Token), puoi acquistare biglietti unici e collezionabili per una vasta gamma di eventi culturali, concerti, spettacoli e molto altro.</p>
          </div>
          <div className="purchase-card-MateraEvents">
            <img src={icon3} alt="Ticket Icon" className="icon-MateraEvents" />
            <h3>Ottieni il tuo ticket NFT</h3>
            <p>Grazie alla tecnologia NFT (Non-Fungible Token), puoi acquistare biglietti unici e collezionabili per una vasta gamma di eventi culturali, concerti, spettacoli e molto altro.</p>
          </div>
        </div>
        <div className="purchase-buttons-MateraEvents">
          <button className="purchase-button primary-MateraEvents">Acquista</button>
          <button className="purchase-button-MateraEvents">Connetti wallet</button>
        </div>
      </div>
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
      <div className="wallet-section-MateraEvents">
        <img src={walletImage} alt="Wallet" className="wallet-image-MateraEvents" />
        <div className="wallet-content-MateraEvents">
          <h2>Non hai ancora un Wallet?</h2>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
          <button className="wallet-button">Crea Wallet</button>
        </div>
      </div>
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
