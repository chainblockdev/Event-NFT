// src/components/ConcertsSection.js
import React, { useState } from 'react';
import concertImage from '../assets/event/party.png';
import filterIcon from '../assets/icons/filter.svg';
import './ConcertsSection.css';

const initialConcerts = [
  {
    id: 1,
    date: 'Aug 13',
    time: 'Sun • 10:00am',
    title: 'Elements Music and Arts Festival - Sunday',
    location: 'Pocono Raceway',
  },
  {
    id: 2,
    date: 'Sep 21',
    time: 'Thu • 8:00pm',
    title: 'Jazz Under the Stars',
    location: 'Central Park',
  },
  {
    id: 3,
    date: 'Oct 15',
    time: 'Sat • 6:00pm',
    title: 'Rock & Roll Reunion',
    location: 'Madison Square Garden',
  },
  {
    id: 4,
    date: 'Nov 5',
    time: 'Fri • 7:30pm',
    title: 'Classical Evening',
    location: 'Carnegie Hall',
    faded: true
  }
];

const additionalConcerts = [
  {
    id: 5,
    date: 'Dec 1',
    time: 'Fri • 9:00pm',
    title: 'Winter Wonderland Concert',
    location: 'Times Square',
  },
  {
    id: 6,
    date: 'Dec 25',
    time: 'Mon • 7:00pm',
    title: 'Christmas Eve Special',
    location: 'Rockefeller Center',
  }
];

const ConcertsSection = () => {
  const [concerts, setConcerts] = useState(initialConcerts);
  const [showMore, setShowMore] = useState(false);

  const handleShowMore = () => {
    const updatedConcerts = concerts.map(concert => ({ ...concert, faded: false }));
    setConcerts([...updatedConcerts, ...additionalConcerts]);
    setShowMore(true);
  };

  return (
    <div className="concerts-containerUpcomingEvents">
      <div className="concerts-headerUpcomingEvents">
        <h2 className="concerts-titleUpcomingEvents">I migliori Concerti vicino a te</h2>
        <div className="filter-containerUpcomingEvents">
          <img src={filterIcon} alt="Filter Icon" className="filter-iconUpcomingEvents" />
          <span className="filter-textUpcomingEvents">Filtri</span>
        </div>
      </div>
      <div className="lineUpcomingEvents"></div>
      <div className="concert-cardsUpcomingEvents">
        {concerts.map((concert) => (
          <div className={`concert-cardUpcomingEvents ${concert.faded ? 'faded' : ''}`} key={concert.id}>
            <img src={concertImage} alt="Concert" />
            <div className="concert-card-contentUpcomingEvents">
              <div className="concert-card-dateUpcomingEvents">{concert.date}</div>
              <div className="concert-card-timeUpcomingEvents">{concert.time}</div>
              <div className="concert-card-titleUpcomingEvents">{concert.title}</div>
              <div className="concert-card-locationUpcomingEvents">{concert.location}</div>
              <div className="concert-card-buttonsUpcomingEvents">
                <button className="details-buttonUpcomingEvents">Vedi i dettagli</button>
                <button className="buy-buttonUpcomingEvents">Acquista ora</button>
              </div>
            </div>
          </div>
        ))}
      </div>
      {!showMore && (
        <button className="show-moreUpcomingEvents" onClick={handleShowMore}>
          Show More
        </button>
      )}
    </div>
  );
};

export default ConcertsSection;
