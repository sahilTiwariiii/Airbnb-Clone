import React from 'react';
import './Cards.css';
import { FaIndianRupeeSign } from "react-icons/fa6";
const Cards = () => {
	return (
		<div className="mianvidcards">
			{/* img container */}
			<div className="egamiontainerry">
				<img className="imredlbdyrt"
					src="https://explora-stays.vercel.app/_next/image?url=https%3A%2F%2Fres.cloudinary.com%2Fdewh4g6qy%2Fimage%2Fupload%2Fv1717135575%2Ffxlhwxvxcuvxys2ozb49.jpg&w=1920&q=75"
					alt=""
				/>
			</div>
			{/* text container */}
            <div className="erhitextrekfdgire">
                {/* Name */}
                <h3 className='namefocountrydfui'>Americas, Bahamas</h3>
                {/* Category */}
                <h4 className="categorydfjbdfyt">Island</h4>
                {/* price */}
                <h3 className="pricebdfhteyurbc">₹ 4582 <span className='ngiherer'>per night</span> </h3>
            </div>
		</div>
	);
};

export default Cards;
