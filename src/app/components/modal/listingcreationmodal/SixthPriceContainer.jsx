'use client';

import React from 'react';
import './SixthPriceContainer.css';
import { useForm } from 'react-hook-form';
import { LiaRupeeSignSolid } from 'react-icons/lia';
import { useDispatch } from 'react-redux';
import { goBackward, goForward } from '@/reduxtoolkit/features/ListingCreationModalToggling';
import { closeListingModal } from '@/reduxtoolkit/features/ListingModalOpenAndClose';

const SixthPriceContainer = () => {
	const { register, handleSubmit, formState: { errors } } = useForm();
	// taking the form data
	const handleDataTake = (data) => {
		console.log('price:', data.price);
	};
	const dispatch = useDispatch();
	// next
	const handleGoToNextLevel = () => {
		// click the Listing Creation Modal // send the action to CLose the modal when click on last button
		dispatch(closeListingModal());
	};
	// go back
	const handleGoToPreviousLevel = () => {
		dispatch(goBackward());
	};

	return (
		<div className="third-fjdsalftifdeir-reg">
			<h1 className="thirdnoces-emoclewotbnbria">How much would you like to charge?</h1>
			<h3 className="thirddnoces-category">Set a price for your place / night</h3>

			{/* Main Content */}
			<div className="propertydetailstainer">
				<div className="textinputfieldsdleiftupnitxet">
					{/* Price Input with Icon */}
					<form onSubmit={handleSubmit(handleDataTake)}>
						<div className="priceecirpontainer">
							<span className="icon-container">
								<LiaRupeeSignSolid size={24} style={{ color: '#404040' }} />
							</span>
							<input
								{...register('price', {
									required: 'Price is required',
									valueAsNumber: true, // only take number
									min: { value: 0, message: 'Price must be a positive number' }
								})}
								type="number"
								className="paisatidfkpixel bvhdery price-input"
								placeholder="Enter price"
							/>
						</div>
						{/* Second Container */}
						<div className="buttons-nextbutton-andprevbutton">
							<button onClick={handleGoToPreviousLevel} type="button" className="listingkcabbutton">
								Back
							</button>
							<button
								onClick={handleGoToNextLevel}
								type="submit"
								className="listing-creation-firsttsrif-eunitnocdf"
							>
								Create Listing
							</button>
						</div>
					</form>
				</div>
			</div>
		</div>
	);
};

export default SixthPriceContainer;
