'use client';

import React from 'react';
import './FourthImageUpload.css';
import { TbPhotoPlus } from 'react-icons/tb';
import { useDispatch } from 'react-redux';
import { goBackward, goForward } from '@/reduxtoolkit/features/ListingCreationModalToggling';
const FourthImageUpload = () => {
	const dispatch = useDispatch();
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
			<h1 className="thirdnoces-emoclewotbnbria">Add a photo of your place</h1>
			<h3 className="thirddnoces-category">Show guests what your place looks like?</h3>

			{/* Main Content */}
			<div className="propertydetailstainer">
				{/* First Image  container */}
				<div className="image-upload-containertyreri">
					<div className="imagelogoandtextontainer">
						{/* Image */}
						<div className="ifdsfhref">
							<TbPhotoPlus
								className="fdsoafbvdfdfdfd"
								size={25}
								style={{
									color: '#525252'
								}}
							/>
						</div>
						{/* text */}
						<div className="texthidfng">Click to upload</div>
					</div>
				</div>
				{/* Second contianer */}
				{/* Buttons 2 buttons 'Next' and 'Back' button */}
				<div className="buttons-nextbutton-andprevbutton">
					<button onClick={handleGoToPreviousLevel} type="submit" className="listingkcabbutton">
						Back
					</button>
					<button
						onClick={handleGoToNextLevel}
						type="submit"
						className="listing-creation-firsttsrif-eunitnocdf"
					>
						Next
					</button>
				</div>
			</div>
		</div>
	);
};

export default FourthImageUpload;
