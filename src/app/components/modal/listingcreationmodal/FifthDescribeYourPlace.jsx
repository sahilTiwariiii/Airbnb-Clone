'use client';

import React from 'react';
import './FifthDescribeYourPlace.css';
import { useForm } from 'react-hook-form';
import { useDispatch } from 'react-redux';
import { goBackward, goForward } from '@/reduxtoolkit/features/ListingCreationModalToggling';

const FifthDescribeYourPlace = () => {
    const { register, handleSubmit, formState: { errors } } = useForm();

    // Function to handle form submission
    const handleTextInput = (data) => {
        console.log("title:",data.title);
        console.log("description:",data.description);
    }
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
            <h1 className="thirdnoces-emoclewotbnbria">How would you describe your place?</h1>
            <h3 className="thirddnoces-category">Short and sweet works best!</h3>

            {/* Main Content */}
            <div className="propertydetailstainer">
                <div className="textinputfieldsdleiftupnitxet">
                    {/* Form starts here */}
                    <form onSubmit={handleSubmit(handleTextInput)}>
                        <div className="dsfjdfjd">
                            {/* Title Input */}
                            <input
                                {...register('title', {
                                    required: 'Title is required'
                                })}
                                type='text'
                                placeholder='Title'
                                className="paisatpixel bvhdery"
                            />
                            {errors.title && <p className="error-message">{errors.title.message}</p>}

                            {/* Divider line */}
                            <div className="listing-creation-enilrhctudf" />

                            {/* Description Input */}
                            <input
                                {...register('description', {
                                    required: 'Description is required'
                                })}
                                type='text'
                                placeholder='Description'
                                className="paisatpixel bvhdery"
                            />
                            {errors.description && <p className="error-message">{errors.description.message}</p>}
                        </div>

                        {/* Submit buttons */}
                        <div className="buttons-nextbutton-andprevbutton">
                            <button onClick={handleGoToPreviousLevel} type="button" className="listingkcabbutton">
                                Back
                            </button>
                            <button onClick={handleGoToNextLevel} type="submit" className="listing-creation-firsttsrif-eunitnocdf">
                                Next
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default FifthDescribeYourPlace;
