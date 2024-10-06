'use client';

import React from 'react';

import './FifthDescribeYourPlace.css';
import { useForm } from 'react-hook-form';
const FifthDescribeYourPlace = () => {
	// Initializing the react-hook-form
	const { register, handleSubmit, formState: { errors } } = useForm();

    // take the form data
    const handleTextInput=(data)=>{
     console.log(data)
    }
	return (
		<div className="third-fjdsalftifdeir-reg">
			<h1 className="thirdnoces-emoclewotbnbria">How would you describe your place?</h1>
			<h3 className="thirddnoces-category">Short and sweet works best!</h3>
			{/* Main Content */}
			<div className="propertydetailstainer">
				{/* Input Fields */}
				<div className="textinputfieldsdleiftupnitxet">
					{/* Title Input */}
                    <form onSubmit={handleSubmit(handleTextInput())}>
                        <div className="dsfjdfjd">
					<input
						{...register('title', {
							required: 'Title is required'
						})}
                        type='text'
                        placeholder='Title'
                        className="paisatpixel bvhdery"
					/>
					{errors.title && <p className="error-message">{errors.title.message}</p>}
                    {/* divider line */}
				<div className="listing-creation-enilrhctudf" />
					{/* Description Input */}
					<input
						{...register('description', {
							required: 'description is required'
						})}
                        type='text'
                        placeholder='Description'
                        className="paisatpixel bvhdery"
					/>
					{errors.description && <p className="error-message">{errors.description.message}</p>}
                    </div>
                    </form>
				</div>
				{/* Second Container -> Buttons */}
				{/* Buttons 2 buttons 'Next' and 'Back' button */}
				<div className="buttons-nextbutton-andprevbutton">
					<button  className="listingkcabbutton">
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

export default FifthDescribeYourPlace;
