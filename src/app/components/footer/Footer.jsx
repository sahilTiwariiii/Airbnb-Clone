'use client';
import React from 'react';
import './Footer.css';
import SecondFooterContainer from './SecondFooterContainer';
import FirstFooterContainer from './FirstFooterContainer';
const Footer = () => {
	return (
		<div className="mainfooterretoofk">
			{/* heading */}
			<h2 className="headingnoitaripsni">Inspiration for future getaways</h2>
			{/* First Footer Component */}
			<FirstFooterContainer/>
			{/* Second Footer Component */}
			<SecondFooterContainer /> 
		</div>
	);
};

export default Footer;
