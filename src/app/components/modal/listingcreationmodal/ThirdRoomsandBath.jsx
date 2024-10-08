'use client';

import React, { useState } from 'react';
import './ThirdRoomsandBath.css';
import { GoPlus } from 'react-icons/go';
import { AiOutlineMinus } from 'react-icons/ai';
import { useForm } from 'react-hook-form';
import { useDispatch } from 'react-redux';
import { goBackward, goForward } from '@/reduxtoolkit/features/ListingCreationModalToggling';

const ThirdRoomsandBath = () => {
	// State for guests, rooms, and bathrooms
	const [guests, setGuests] = useState(1);
	const [rooms, setRooms] = useState(1);
	const [bathrooms, setBathrooms] = useState(1);

	// Initialize react-hook-form
	const { handleSubmit } = useForm();

	// Decrement handlers with condition to prevent going below 1
	const decrementGuests = () => {
		if (guests > 1) setGuests(guests - 1);
	};

	const decrementRooms = () => {
		if (rooms > 1) setRooms(rooms - 1);
	};

	const decrementBathrooms = () => {
		if (bathrooms > 1) setBathrooms(bathrooms - 1);
	};

	// Form submission handler
	const handleRoomsData = () => {
		// Log the current state values
		console.log('Guests:', guests);
		console.log('Rooms:', rooms);
		console.log('Bathrooms:', bathrooms);
	};
	const dispatch=useDispatch()
	// next
	const handleGoToNextLevel = () => {
		dispatch(goForward());
	};
	// go back
	const handleGoToPreviousLevel = () => {
		dispatch(goBackward());
	};
	return (
		<div className="third-fjdsalftifdeir-reg">
			<h1 className="thirdnoces-emoclewotbnbria">Share some basics about your place</h1>
			<h3 className="thirddnoces-category">What amenities do you have?</h3>

			{/* Main Content */}
			<div className="propertydetailstainer">
				<form onSubmit={handleSubmit(handleRoomsData)}>
					<div className="detailsontainersliated">
						{/* Guests */}
						<div className="tsrifdraccard">
							<div className="txetardfirst">
								<h3 className="hochpochmakaro">Guests</h3>
								<h4 className="npasgatthings">How many guests do you allow?</h4>
							</div>
							<div className="eetnuconteinaer">
								<div onClick={decrementGuests} className="icordectenter">
									<AiOutlineMinus className="dfcjhjh" size={16} style={{ color: '#525252' }} />
								</div>
								<div className="dsfhsaycdfhdft">{guests}</div>
								<div onClick={() => setGuests(guests + 1)} className="icordectenter">
									<GoPlus className="dfcjhjh" size={16} style={{ color: '#525252' }} />
								</div>
							</div>
						</div>

						{/* Rooms */}
						<div className="tsrifdraccard">
							<div className="txetardfirst">
								<h3 className="hochpochmakaro">Rooms</h3>
								<h4 className="npasgatthings">How many rooms do you have?</h4>
							</div>
							<div className="eetnuconteinaer">
								<div onClick={decrementRooms} className="icordectenter">
									<AiOutlineMinus className="dfcjhjh" size={16} style={{ color: '#525252' }} />
								</div>
								<div className="dsfhsaycdfhdft">{rooms}</div>
								<div onClick={() => setRooms(rooms + 1)} className="icordectenter">
									<GoPlus className="dfcjhjh" size={16} style={{ color: '#525252' }} />
								</div>
							</div>
						</div>

						{/* Bathrooms */}
						<div className="tsrifdraccard">
							<div className="txetardfirst">
								<h3 className="hochpochmakaro">Bathrooms</h3>
								<h4 className="npasgatthings">Number of bathrooms you have?</h4>
							</div>
							<div className="eetnuconteinaer">
								<div onClick={decrementBathrooms} className="icordectenter">
									<AiOutlineMinus className="dfcjhjh" size={16} style={{ color: '#525252' }} />
								</div>
								<div className="dsfhsaycdfhdft">{bathrooms}</div>
								<div onClick={() => setBathrooms(bathrooms + 1)} className="icordectenter">
									<GoPlus className="dfcjhjh" size={16} style={{ color: '#525252' }} />
								</div>
							</div>
						</div>
					</div>

					{/* Buttons */}
					<div className="buttons-nextbutton-andprevbutton">
						<button onClick={handleGoToPreviousLevel} type="text" className="listingkcabbutton">Back</button>
						<button onClick={handleGoToNextLevel} type="submit" className="listing-creation-firsttsrif-eunitnocdf">Next</button>
					</div>
				</form>
			</div>
		</div>
	);
};

export default ThirdRoomsandBath;
