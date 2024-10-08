import React, { useState } from 'react';
import './FirstCategorySelect.css';
import { FaUmbrellaBeach } from 'react-icons/fa6';
import { GiWindmill } from 'react-icons/gi';
import { HiOutlineHomeModern } from 'react-icons/hi2';
import { CiMountain1 } from 'react-icons/ci';
import { PiSwimmingPoolLight } from 'react-icons/pi';
import { FaSkiingNordic } from 'react-icons/fa';
import { PiIsland } from 'react-icons/pi';
import { GiBoatFishing } from 'react-icons/gi';
import { GiCastle } from 'react-icons/gi';
import { GiCampingTent } from 'react-icons/gi';
import { TbTopologyStar3 } from 'react-icons/tb';
import { GiCaveEntrance } from 'react-icons/gi';
import { GiCactus } from 'react-icons/gi';
import { GiBarn } from 'react-icons/gi';
import { IoDiamond } from 'react-icons/io5';
import { useDispatch } from 'react-redux';
import { goForward } from '@/reduxtoolkit/features/ListingCreationModalToggling';

const FirstCategorySelect = () => {
	// Store the index of the active category card
	const [ activeCategoryIndex, setActiveCategoryIndex ] = useState(null);
	const dispatch = useDispatch();

	const handleGoToNextLevel = () => {
		dispatch(goForward());
	};

	// Categories data
	const categories = [
		{ name: 'Beach', icon: <FaUmbrellaBeach size={30} /> },
		{ name: 'Windmills', icon: <GiWindmill size={30} /> },
		{ name: 'Modern', icon: <HiOutlineHomeModern size={30} /> },
		{ name: 'Countryside', icon: <CiMountain1 size={30} /> },
		{ name: 'Pools', icon: <PiSwimmingPoolLight size={30} /> },
		{ name: 'Islands', icon: <PiIsland size={30} /> },
		{ name: 'Lake', icon: <GiBoatFishing size={30} /> },
		{ name: 'Skiing', icon: <FaSkiingNordic size={30} /> },
		{ name: 'Castles', icon: <GiCastle size={30} /> },
		{ name: 'Camping', icon: <GiCampingTent size={30} /> },
		{ name: 'Arctic', icon: <TbTopologyStar3 size={30} /> },
		{ name: 'Cave', icon: <GiCaveEntrance size={30} /> },
		{ name: 'Desert', icon: <GiCactus size={30} /> },
		{ name: 'Barns', icon: <GiBarn size={30} /> },
		{ name: 'Lux', icon: <IoDiamond size={30} /> }
	];

	// Handle the card click
	const handleActiveCategoryCard = (index) => {
		setActiveCategoryIndex(index); // Set the clicked category as active
	};

	// Handle the submit button click
	const handleSubmit = () => {
		if (activeCategoryIndex !== null) {
			console.log('Selected category:', categories[activeCategoryIndex].name);
		} else {
			console.log('No category selected');
		}
	};
	// Combine the functions into one
	const handleButtonClick = () => {
		handleGoToNextLevel();
		handleSubmit();
	};
	return (
		<div className="fjdsalftifdeir-reg">
			<h1 className="listing-creation-emoclewotbnbria">Which of these best describes your place?</h1>
			<h3 className="emocle-pick-a-category">Pick a category</h3>
			<div className="listing-creation-category-ontainer">
				{categories.map((category, index) => (
					<div
						key={index}
						onClick={() => handleActiveCategoryCard(index)}
						className={
							activeCategoryIndex === index ? (
								'category-block-ontainer-active-hontainer'
							) : (
								'category-block-ontainer'
							)
						}
					>
						<div className="category-logo-container">{category.icon}</div>
						<div className="category-textname-ontainer">
							<h2 className="category-namingerherhtext">{category.name}</h2>
						</div>
					</div>
				))}
			</div>
			<button onClick={handleButtonClick} type="button" className="listing-creation-firsttsrif-eunitnocdf">
				Next
			</button>
		</div>
	);
};

export default FirstCategorySelect;
