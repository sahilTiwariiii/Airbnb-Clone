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
import SixthPriceContainer from './SixthPriceContainer';
import { useDispatch, useSelector } from 'react-redux';
import { closeListingModal } from '@/reduxtoolkit/features/ListingModalOpenAndClose';
const ListingCreationModal = () => {
	// This is model step 
	const listingmodeldrive = useSelector((state) => state.listingmodel);
	// This is listing model open and close
	const listingModelOpenandClose=useSelector((state)=>state.listingmodelopenandclose)
	console.log(listingmodeldrive);

	const dispatch=useDispatch()
	// send action to Close the Listing Modal
	const closeTheListingModell=()=>{
		dispatch(closeListingModal())
	}
	return (
		<>
		{listingModelOpenandClose && (
			<div className="listing-creation-overlay">
			{/* Main Modal */}
			<div className="listing-creation-modal">
				{/* Modal Header */}
				<div className="listing-modal-header ">
					{/* x icon */}
					<button onClick={closeTheListingModell} className="listing-creation-close-btn">
						<RxCross2 size={20} />
					</button>
					{/* heading */}
					<h2 className="listing-creation-modal-heading">Airbnb your home!</h2>
				</div> 
				{/* divider line */}
				<div className="listing-creation-enilrhctudf" />
				{/* 1st step component */}
				{listingmodeldrive == 1 && <FirstCategorySelect />}
				{/* 2nd step component */}
				{listingmodeldrive == 2 && <SecondPlaceLocated />}
				{/* 3rd step component */}
				{listingmodeldrive == 3 && <ThirdRoomsandBath />}
				{/* 4th step component */}
				{listingmodeldrive == 4 && <FourthImageUpload />}
				{/* 5th step component */}
				{listingmodeldrive == 5 && <FifthDescribeYourPlace />}
				{/* 6th step component */}
				{listingmodeldrive == 6 && <SixthPriceContainer />}
			</div>
		</div>
		)} 
		
		</>
	);
};

export default ListingCreationModal;
