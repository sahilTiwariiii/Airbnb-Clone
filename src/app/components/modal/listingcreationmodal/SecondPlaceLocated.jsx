'use client';

import React, { useState } from 'react';
import './SecondPlaceLocated.css';
import Select from 'react-select';
import countries from 'world-countries';
import { MapContainer, TileLayer, Marker, Popup, useMap } from 'react-leaflet';
import L from 'leaflet';
import 'leaflet/dist/leaflet.css';

// Function to generate marker icon
const createMarkerIcon = () => {
  return L.icon({
    iconUrl: 'https://unpkg.com/leaflet@1.7.1/dist/images/marker-icon.png',
    iconSize: [25, 41],
    iconAnchor: [12, 41],
  });
};

// Custom hook to change map view
const ChangeView = ({ center, zoom }) => {
  const map = useMap();
  map.setView(center, zoom); // Set the map view
  return null;
};

const SecondPlaceLocated = () => {
  const [selectedCountry, setSelectedCountry] = useState(null); // State for the selected country

  // Create the options array from the world countries package to use in react-select as an option
  const countryOptions = countries.map((country) => ({
    value: country.cca2, // Use the country code as the value
    label: country.name.common, // Display only the country name
    latlng: country.latlng, // Store latitude and longitude
  }));

  // Handle country selection
  const handleCountryChange = (selectedOption) => {
    if (selectedOption) {
      console.log(`${selectedOption.label}`); // Log the selected country name
      setSelectedCountry(selectedOption); // Set the selected country
    } else {
      setSelectedCountry(null); // Clear the selected country
    }
  };

  const position = selectedCountry ? [selectedCountry.latlng[0], selectedCountry.latlng[1]] : [0, 0]; // Default position

  return (
    <div className="second-fjdsalftifdeir-reg">
      <h1 className="seconddnoces-emoclewotbnbria">Where is your place located?</h1>
      <h3 className="seconddnoces-category">Help guests find you!</h3>
      {/* Main Content */}
      {/* First container of search */}
      <div className="search-countries-names-container">
        {/* React select */}
        <Select
          className="emanssalcname"
          placeholder="Choose the location..."
          options={countryOptions}
          isClearable={true} // This will make the clear button
          onChange={handleCountryChange} // Log selected country
          
          styles={{
            control: (base) => ({
              ...base,
              border: 'none', // Remove the border
              boxShadow: 'none', // Remove shadow if any
            }),
            menu: (base) => ({
              ...base,
              zIndex: 1000, // Set a high z-index so dropdown appears above the map
            }),
          }}
          
        />
      </div>
      {/* Second container of map */}
      <div className="search-countries-map-container">
        <MapContainer center={position} zoom={2} style={{ height: '221px', width: '100%',borderRadius:'10px' }}>
          <TileLayer
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            attribution='&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          />
          {/* Change the map view to the selected country */}
          {selectedCountry && <ChangeView center={position} zoom={5} />}
          {selectedCountry && (
            <Marker position={position} icon={createMarkerIcon()}>
              <Popup>
                {selectedCountry.label}
              </Popup>
            </Marker>
          )}
        </MapContainer>
      </div>
      {/* Buttons 2 buttons 'Next' and 'Back' button */}
      <div className="buttons-nextbutton-andprevbutton">
      <button type="submit" className="listingkcabbutton">
        Back
      </button>
      <button type="submit" className="listing-creation-firsttsrif-eunitnocdf">
        Next
      </button>
      </div>
    </div>
  );
};

export default SecondPlaceLocated;
