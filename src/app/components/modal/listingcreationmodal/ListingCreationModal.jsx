'use client';

import React from 'react';
import './ListingCreationModal.css';
import { RxCross2 } from 'react-icons/rx';
import { useState } from 'react';
import FirstCategorySelect from './FirstCategorySelect';
import SecondPlaceLocated from './SecondPlaceLocated';
import ThirdRoomsandBath from './ThirdRoomsandBath';
import FourthImageUpload from './FourthImageUpload';
import FifthDescribeYourPlace from './FifthDescribeYourPlace';
const ListingCreationModal = () => {
	const [ step, setStep ] = useState(0);

	// Move Forward -> go to the next step
	const handleMoveForward = () => {
		setStep(step + 1);
	};
	// Move Backward -> go to the previous step
	const handleMoveBackward = () => {
		setStep(step - 1);
	};
	return (
		<div className="listing-creation-overlay">
			{/* Main Modal */}
			<div className="listing-creation-modal">
				{/* Modal Header */}
				<div className="listing-modal-header ">
					{/* x icon */}
					<button className="listing-creation-close-btn">
						<RxCross2 size={20} />
					</button>
					{/* heading */}
					<h2 className="listing-creation-modal-heading">Airbnb your home!</h2>
				</div>
				{/* divider line */}
				<div className="listing-creation-enilrhctudf" />
				{/* 1st step container */}
				{/* <FirstCategorySelect /> */}
				{/* 2nd step contaienr */}
				{/* <SecondPlaceLocated/> */}
				{/* 3rd step container */}
				{/* <ThirdRoomsandBath/> */}
				{/* 4th step container */}
				{/* <FourthImageUpload/> */}
				{/* 5th step container */}
				<FifthDescribeYourPlace/>
			
			</div>
		</div>
	);
};

export default ListingCreationModal;

