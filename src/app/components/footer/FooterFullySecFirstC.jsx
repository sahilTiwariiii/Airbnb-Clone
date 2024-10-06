'use client';
import React, { useState } from 'react';
import './FooterFullySecFirstC.css';
import { RiArrowDropDownLine } from 'react-icons/ri';
import Link from 'next/link';

const FooterFullySecFirstC = () => {
  const [showMore, setShowMore] = useState(false);

  // Function to toggle the 'Show More' state
  const handleShowMore = () => {
    setShowMore(!showMore);
  };

  // Array of locations and types
  const locations = [
    { name: 'Canmore', type: 'Pet-friendly rentals' },
    { name: 'Tucson', type: 'Pet-friendly rentals' },
    { name: 'Anaheim', type: 'Beach house rentals' },
    { name: 'Benalmadena', type: 'Beach house rentals' },
    { name: 'Jasper', type: 'Cabin rentals' },
    { name: 'Monetery', type: 'Cabin rentals' },
    { name: 'Marbella', type: 'House rentals' },
    { name: 'Mountain View', type: 'Family-friendly rentals' },
    { name: 'Peso Robles', type: 'House rentals' },
    { name: 'Prescott', type: 'House rentals' },
    { name: 'Mallacoota', type: 'Beach house rentals' },
    { name: 'Sonoma', type: 'Rentals with pools' },
    { name: 'Scottsdale', type: 'Apartment rentals' },
    { name: 'Ibiza', type: 'Holiday rentals' },
    // Additional locations (hidden by default)
    { name: 'Dubai', type: 'House rentals' },
    { name: 'Birmingham', type: 'Flat rentals' },
    { name: 'Bringhton', type: 'Bench house rentals' },
    { name: 'Bude', type: 'Holiday rentals' },
    { name: 'Newcastle upon Tyne', type: 'Holiday rentals' },
    { name: 'Padstow', type: 'Flat rentals' },
    { name: 'South West England', type: 'House rentals' },
    { name: 'Whitby', type: 'Cottage rentals' },
    { name: 'Fort Myers', type: 'Apartment rentals' },
    { name: 'Jacksonville', type: 'Apartment rentals' },
    { name: 'Kissimmee', type: 'Villa rentals' },
    { name: 'Loangboat Key', type: 'Pet-friendly rentals' },
    { name: 'St. Augustine', type: 'Flat rentals' },
    { name: 'The Villages', type: 'Pet-friendly rentals' },
    { name: 'Dahlonega', type: 'Cottage rentals' },
    { name: 'Crete', type: 'House rentals' },
    { name: 'Mykonos', type: 'Beachfront rentals' },
    { name: 'Santorini', type: 'Flat rentals' },
    { name: 'Oahu', type: 'Flat rentals' },
    { name: 'Capri', type: 'House rentals' },
    { name: 'Bar Harbor', type: 'House rentals' },
    { name: 'Mackinac Island', type: 'Cabin rentals' },
    { name: 'St. Joseph', type: 'Cabin rentals' },
    { name: 'Larsmont', type: 'Holiday rentals' },
    { name: 'Las Vegas', type: 'Holiday rentals' },
  ];

  // Divide into visible and hidden items
  const visibleItems = locations.slice(0, 16);
  const hiddenItems = locations.slice(16);

  return (
    <div className="niamiahey">
      {/* Render visible items */}
      {visibleItems.map((location, index) => (
        <div className="bougnfjg" key={index}>
          <Link className="linkssknilrut" href="/f">
            {location.name}
          </Link>
          <h3 className="tepyldneirf">{location.type}</h3>
        </div>
      ))}

      {/* Show More button */}
      {!showMore && (
        <div className="bougnfjg" onClick={handleShowMore}>
          <div className="hsdhfd">
            <span className="linkssknilrut">Show more</span>
            <RiArrowDropDownLine className='pikachur' fontSize={20} size={30} />
          </div>
        </div>
      )}

      {/* Render hidden items conditionally */}
      {showMore && hiddenItems.map((location, index) => (
        <div className="bougnfjg" key={index + 16}>
          <Link className="linkssknilrut" href="/f">
            {location.name}
          </Link>
          <h3 className="tepyldneirf">{location.type}</h3>
        </div>
      ))}
    </div>
  );
};

export default FooterFullySecFirstC;
