import React from 'react';
import './BrandsSection.css';

const brands = [
  { src: 'metamask-logo.png', alt: 'Metamask' },
  { src: 'bitgo-logo.png', alt: 'BitGo' },
  { src: 'coinbase-logo.png', alt: 'Coinbase' },
  { src: 'trustwallet-logo.png', alt: 'Trust Wallet' },
  { src: 'exodus-logo.png', alt: 'Exodus' },
];

const BrandsSection = () => (
  <section className="brands-section">
    <h2>Join these brands</h2>
    <p>We've had the pleasure of working with industry-defining brands. These are just some of them.</p>
    <div className="brands-list">
      {brands.map((brand, index) => (
        <img key={index} src={process.env.PUBLIC_URL + '/' + brand.src} alt={brand.alt} className="brand-logo" />
      ))}
    </div>
  </section>
);

export default BrandsSection;
