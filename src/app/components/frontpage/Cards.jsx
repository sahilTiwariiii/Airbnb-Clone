'use client'; // To make sure it's a client-side component

import React, { useState } from 'react';
import './Cards.css';
import { FaIndianRupeeSign } from "react-icons/fa6";
import { homepageallcards } from '../homepagecards';
import { IoIosHeartEmpty, IoMdHeart } from 'react-icons/io';
import Link from 'next/link'; // Import the Link component for navigation

const Cards = () => {
	// State to manage favorites for individual cards
	const [favouriteCards, setFavouriteCards] = useState([]);

	// Function to toggle the favorite status for a specific card
	const handleFavouriteClick = (id) => {
		setFavouriteCards((prevFavorites) =>
			prevFavorites.includes(id)
				? prevFavorites.filter((favId) => favId !== id)
				: [...prevFavorites, id]
		);
	};

	return (
		<>
			{homepageallcards.map((item) => (
				<Link
					href={{
						pathname: `/listings/${item.id}`,
						query: {
							propertyName: item.propertyname,
							price: item.price,
							image: item.imagee,
							category: item.category,
						},
					}}
					key={item.id}
					className="mianvidcards"
				>
					<div>
						{/* like functionality */}
						<span
							onClick={(e) => {
								e.stopPropagation(); // Prevent navigation on heart click
								handleFavouriteClick(item.id);
							}}
							className="fdsaffer"
						>
							{favouriteCards.includes(item.id) ? (
								<IoMdHeart
									size={24}
									style={{ color: '#F43F5E', fill: '#D63951' }}
								/>
							) : (
								<IoIosHeartEmpty
									size={24}
									style={{
										stroke: 'white',
										fill: '#FFFFFF',
										strokeWidth: '6',
									}}
								/>
							)}
						</span>

						{/* img container */}
						<div className="egamiontainerry">
							<img
								className="imredlbdyrt"
								src={item.imagee}
								alt={item.propertyname}
							/>
						</div>

						{/* text container */}
						<div className="erhitextrekfdgire">
							<h3 className="namefocountrydfui">{item.propertyname}</h3>
							<h4 className="categorydfjbdfyt">{item.category}</h4>
							<h3 className="pricebdfhteyurbc">
								₹ {item.price} <span className="ngiherer">per night</span>
							</h3>
						</div>
					</div>
				</Link>
			))}
		</>
	);
};

export default Cards;
