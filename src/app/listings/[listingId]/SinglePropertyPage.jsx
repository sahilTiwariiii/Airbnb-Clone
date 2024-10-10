'use client'; // Make sure it's a client-side component

import React, { useState } from 'react';
import './SinglePropertyPage.css';
import { IoIosHeartEmpty, IoMdHeart } from 'react-icons/io';
import { FaCircleUser } from 'react-icons/fa6';
import { FaUmbrellaBeach } from 'react-icons/fa';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import L from 'leaflet';
import 'leaflet/dist/leaflet.css';
import { DateRange } from 'react-date-range';
import 'react-date-range/dist/styles.css';
import 'react-date-range/dist/theme/default.css';
import { useSearchParams } from 'next/navigation'; // Import for query params

// Function to generate marker icon
const createMarkerIcon = () => {
	return L.icon({
		iconUrl: 'https://unpkg.com/leaflet@1.7.1/dist/images/marker-icon.png',
		iconSize: [ 25, 41 ],
		iconAnchor: [ 12, 41 ]
	});
};

const SinglePropertyPage = () => {
	const [ favouriteCondition, setFavouriteCondition ] = useState(false);

	// Static position for Italy (you can change this later)
	const position = [ 41.8719, 12.5674 ];

	// Date range state
	const [ dateRange, setDateRange ] = useState([
		{
			startDate: new Date(),
			endDate: new Date(),
			key: 'selection'
		}
	]);

	// Get query params
	const searchParams = useSearchParams();
	const propertyName = searchParams.get('propertyName');
	const price = searchParams.get('price');
	const image = searchParams.get('image');
	const category = searchParams.get('category');

	// Function to toggle the favourite status
	const handleFavouriteClick = () => {
		setFavouriteCondition((prev) => !prev);
	};

	return (
		<div className="egapytreporpelgnis">
			{/* Property Heading and Image Container */}
			<div className="gnidaehegaireni">
				{/* Text Container */}
				<div className="xtetreniatnoc">
					<h1 className="sdfhcgvertr">{propertyName}</h1>
					<h3 className="dsbcerwewew">{category}</h3>
				</div>

				{/* Image Container */}
				<div className="fdsafnmcvbpot">
					<span onClick={handleFavouriteClick} className="lkdfbveurerzas">
						{favouriteCondition ? (
							<IoMdHeart size={24} style={{ color: '#F43F5E', fill: '#D63951' }} />
						) : (
							<IoIosHeartEmpty
								size={24}
								style={{
									stroke: 'grey',
									fill: '#FFFFFF',
									strokeWidth: '6'
								}}
							/>
						)}
					</span>
					<img className="sdfbvrte" src={image} alt={propertyName} />
				</div>
			</div>

			{/* Property details and date range */}
			<div className="dfheriucdawx">
				{/* Property details container */}
				<div className="hdsfjrhe">
					<div className="fdsarerhuv">
						<h1 className="dsepo">Hosted by Manu Baid</h1>
						<span className="erodc">
							<FaCircleUser style={{ color: '#CDCDCD' }} size={30} />
						</span>
					</div>
					{/* Bedrooms details */}
					<div className="fdsjkfzvctewrwep">
						<span className="fdajzuetw">
							8 <span className="fdfkjcbat">guests</span>
						</span>
						<span className="fdajzuetw">
							4 <span className="fdfkjcbat">rooms</span>
						</span>
						<span className="fdajzuetw">
							4 <span className="fdfkjcbat">bathrooms</span>
						</span>
					</div>
					<div className="hrefidfdifhdfh" />

					{/* Category logo and text */}
					<div className="fdsj">
						<div className="dhfertr">
							<FaUmbrellaBeach size={40} style={{ color: '#525252' }} />
						</div>
						<div className="terxfhdirer">
							<h3 className="terougnaem">{category}</h3>
							<h3 className="terougnfdsafaem">This property is near a beach</h3>
						</div>
					</div>

					<div className="hrefidfdifhdfh" />
					{/* Little description */}
					<div className="littlecdbfxawqw">
						<h1 className="jfdbwterqszsa">
							Beachside beautiful villa with 4 bedrooms and luxurious interior.
						</h1>
					</div>
					<div className="hrefidfdifhdfh" />

					{/* Map Container */}
					<div className="mappamfdsreurgczxa" />
					<MapContainer
						center={position}
						zoom={5}
						style={{ height: '221px', width: '100%', borderRadius: '10px' }}
					>
						<TileLayer
							url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
							attribution="&copy; OpenStreetMap contributors"
						/>
						<Marker position={position} icon={createMarkerIcon()}>
							<Popup>Italy</Popup>
						</Marker>
					</MapContainer>
				</div>

				{/* Date range container */}
				<div className="fdsajferc">
					{/* Price container */}
					<div className="eryewrt">
						<h1 className="qreawssa">₹ {price}</h1>
						<span className="dsfhcywte">per night</span>
					</div>

					{/* Date range picker */}
					<div className="rangedatejsdfhdsbcdcd" style={{ width: '100%' }}>
						<DateRange
							ranges={dateRange}
							onChange={(item) => setDateRange([ item.selection ])}
							rangeColors={[ '#EF385C' ]}
							direction="horizontal"
							className="custom-date-range-picker"
						/>
					</div>

					{/* Total price */}
					<div className="fdjdfh">
						<button className="jkdshfjererer">Reserve</button>
						<div className="fherertbchdaqwrifh">
							<h1 className="dsffhreytq">Total</h1>
							<h1 className="fhdjrerytzwq">₹ {price}</h1>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default SinglePropertyPage;
