'use client';

import React from 'react';
import './HomePagee.css';
import Cards from './Cards';
import Categories from '../categories/Categories';
const HomePagee = () => {
	return (
		<>
		<Categories />
		
		<div className="mainhomepagecontainergyt">
			<Cards />
		</div>
		</>
	);
};

export default HomePagee;
