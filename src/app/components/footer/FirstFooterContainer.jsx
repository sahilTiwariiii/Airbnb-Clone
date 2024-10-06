'use client';
import Link from 'next/link';
import React, { useState } from 'react';
import './FirstFooterContainer.css';
import FooterFullySecFirstC from './FooterFullySecFirstC';
import FooterFullySecSecFirsts from './FooterFullySecSecFirsts';
import FooterFullyThird from './FooterFullyThird';
import MountainFooterCon from './MountainFooterCon';
import BeachFooterCon from './BeachFooterCon';
import UniqueStays from './UniqueStays';
import CategoriesFooter from './CategoriesFooter';
import ThingsToDo from './ThingsToDo';
const FirstFooterContainer = () => {
	// Define seperate states for links
	const [ isPopularActive, setIsPopularActive ] = useState(true);
	const [ isArtsActive, setIsArtsActive ] = useState(false);
	const [ isOutsidesActive, setIsOutsidesActive ] = useState(false);
	const [ isMountainsActive, setIsMountainsActive ] = useState(false);
	const [ isBeachActive, setIsBeachActive ] = useState(false);
	const [ isUniqueActive, setIsUniqueActive ] = useState(false);
	const [ isCategories, setIsCategories ] = useState(false);
	const [ isThingsActive, setIsThingsActive ] = useState(false);

	// Popular
	const handlePopulerClick = () => {
		setIsPopularActive(true);
		setIsArtsActive(false);
		setIsOutsidesActive(false);
		setIsMountainsActive(false);
		setIsBeachActive(false);
		setIsUniqueActive(false);
		setIsCategories(false);
		setIsThingsActive(false);
	};
	// Arts
	const handleArtsClick = () => {
		setIsArtsActive(true);
		setIsPopularActive(false);
		setIsOutsidesActive(false);
		setIsMountainsActive(false);
		setIsBeachActive(false);
		setIsUniqueActive(false);
		setIsCategories(false);
		setIsThingsActive(false);
	};
	// Outside
	const handleOutsideClick = () => {
		setIsOutsidesActive(true);
		setIsArtsActive(false);
		setIsPopularActive(false);
		setIsMountainsActive(false);
		setIsBeachActive(false);
		setIsUniqueActive(false);
		setIsCategories(false);
		setIsThingsActive(false);
	};
	// Mountain
	const handleMountainClick = () => {
		setIsMountainsActive(true);
		setIsOutsidesActive(false);
		setIsArtsActive(false);
		setIsPopularActive(false);
		setIsBeachActive(false);
		setIsUniqueActive(false);
		setIsCategories(false);
		setIsThingsActive(false);
	};
	// Beach
	const handleBeachClick = () => {
		setIsBeachActive(true);
		setIsMountainsActive(false);
		setIsOutsidesActive(false);
		setIsArtsActive(false);
		setIsPopularActive(false);
		setIsUniqueActive(false);
		setIsCategories(false);
		setIsThingsActive(false);
	};
	// Unique
	const handleUniqueClick = () => {
		setIsUniqueActive(true);
		setIsBeachActive(false);
		setIsMountainsActive(false);
		setIsOutsidesActive(false);
		setIsArtsActive(false);
		setIsPopularActive(false);
		setIsCategories(false);
		setIsThingsActive(false);
	};
	// Categories
	const handleCategorieClick = () => {
		setIsCategories(true);
		setIsUniqueActive(false);
		setIsBeachActive(false);
		setIsMountainsActive(false);
		setIsOutsidesActive(false);
		setIsArtsActive(false);
		setIsPopularActive(false);
		setIsThingsActive(false);
	};
	// Things
	const handleThingClick = () => {
		setIsThingsActive(true);
		setIsCategories(false);
		setIsUniqueActive(false);
		setIsBeachActive(false);
		setIsMountainsActive(false);
		setIsOutsidesActive(false);
		setIsArtsActive(false);
		setIsPopularActive(false);
	};

	// Reset all states

	return (
		<div>
			{/* Heading and all links */}
			<div className="firstfirstfootercontainerny">
				<button className={`jusfirsthu ${isPopularActive ? 'active' : ''}`} onClick={handlePopulerClick}>
					Popular
				</button>
				<button className={`mybossliksn ${isArtsActive ? 'active' : ''}`} onClick={handleArtsClick}>
					Arts & culture
				</button>
				<button className={`mybossliksn ${isOutsidesActive ? 'active' : ''}`} onClick={handleOutsideClick}>
					Outdoors
				</button>
				<button className={`mybossliksn ${isMountainsActive ? 'active' : ''}`} onClick={handleMountainClick}>
					Mountains
				</button>
				<button className={`mybossliksn ${isBeachActive ? 'active' : ''}`} onClick={handleBeachClick}>
					Beach
				</button>
				<button className={`mybossliksn ${isUniqueActive ? 'active' : ''}`} onClick={handleUniqueClick}>
					Unique stays
				</button>
				<button className={`mybossliksn ${isCategories ? 'active' : ''}`} onClick={handleCategorieClick}>
					Categories
				</button>
				<button className={`mybossliksn ${isThingsActive ? 'active' : ''}`} onClick={handleThingClick}>
					Things to do
				</button>
			</div>
			{/* hr line divder line */}
			<div className="edivedenil" />
			{/* Content */}
			{/* Show Popular Content */}
			{isPopularActive && <FooterFullySecFirstC />} 
			{/* Show Arts & Culture Content */}
			{isArtsActive && <FooterFullySecSecFirsts />}
			{/* Show Outdoors Content */}
			{isOutsidesActive && <FooterFullyThird />}
			{/* Show Mountain Content */}
			{isMountainsActive && <MountainFooterCon />}
			{/* Show Beach Content */}
			{isBeachActive && <BeachFooterCon />}
			{/* Show Unique Stays */}
			{isUniqueActive && <UniqueStays />}
			{/* Show Categories Content */}
			{isCategories && <CategoriesFooter />}
			{/* Show Things Content */}
			{isThingsActive && <ThingsToDo />}
		</div>
	);
};

export default FirstFooterContainer;
