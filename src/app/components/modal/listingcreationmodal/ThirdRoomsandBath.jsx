'use client';

import React from 'react';
import './ThirdRoomsandBath.css';
import { GoPlus } from 'react-icons/go';
import { AiOutlineMinus } from 'react-icons/ai';
const ThirdRoomsandBath = () => {
	return (
		<div className="third-fjdsalftifdeir-reg">
			<h1 className="thirdnoces-emoclewotbnbria">Share some basics about your place</h1>
			<h3 className="thirddnoces-category">What amenities do you have?</h3>
			{/* Main Content */}
			<div className="propertydetailstainer">
				{/* first container of beddrooms ,rooms,geusts */}
				<div className="detailsontainersliated">
					{/* first details card */}
					<div className="tsrifdraccard">
						{/* text container */}
						<div className="txetardfirst">
							<h3 className="hochpochmakaro">Guests</h3>
							<h4 className="npasgatthings">How many guests do you allow?</h4>
						</div>
						{/* counter container */}
						<div className="eetnuconteinaer">
							{/* Plus Icon Container */}
							<div className="icordectenter">
								<GoPlus className="dfcjhjh" size={16} style={{ color: '#525252' }} />
							</div>
							{/* Counter Current Value */}
							<div className="dsfhsaycdfhdft">1</div>
							{/* Minus Icon Container */}
							<div className="icordectenter">
								<AiOutlineMinus className="dfcjhjh" size={16} style={{ color: '#525252' }} />
							</div>
						</div>
					</div>
					{/* divider line */}
					<div className="listing-sdfhi-dfhfdhf " />
					{/* second details card */}
					<div className="tsrifdraccard">
						{/* text container */}
						<div className="txetardfirst">
							<h3 className="hochpochmakaro">Rooms</h3>
							<h4 className="npasgatthings">How many rooms do you have?</h4>
						</div>
						{/* counter container */}
						<div className="eetnuconteinaer">
							{/* Plus Icon Container */}
							<div className="icordectenter">
								<GoPlus className="dfcjhjh" size={16} style={{ color: '#525252' }} />
							</div>
							{/* Counter Current Value */}
							<div className="dsfhsaycdfhdft">1</div>
							{/* Minus Icon Container */}
							<div className="icordectenter">
								<AiOutlineMinus className="dfcjhjh" size={16} style={{ color: '#525252' }} />
							</div>
						</div>
					</div>
					{/* divider line */}
					<div className="listing-sdfhi-dfhfdhf " />
					{/* third details card */}
					<div className="tsrifdraccard">
						{/* text container */}
						<div className="txetardfirst">
							<h3 className="hochpochmakaro">Bathrooms</h3>
							<h4 className="npasgatthings">Number of bathrooms you have?</h4>
						</div>
						{/* counter container */}
						<div className="eetnuconteinaer">
							{/* Plus Icon Container */}
							<div className="icordectenter">
								<GoPlus className="dfcjhjh" size={16} style={{ color: '#525252' }} />
							</div>
							{/* Counter Current Value */}
							<div className="dsfhsaycdfhdft">1</div>
							{/* Minus Icon Container */}
							<div className="icordectenter">
								<AiOutlineMinus className="dfcjhjh" size={16} style={{ color: '#525252' }} />
							</div>
						</div>
					</div>
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
		</div>
	);
};

export default ThirdRoomsandBath;
