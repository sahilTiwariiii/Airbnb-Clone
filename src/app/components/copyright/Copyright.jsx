'use client';

import Link from 'next/link';
import React from 'react'; 
import { FiGlobe } from "react-icons/fi";
import { FaFacebookSquare } from "react-icons/fa";
import { FaTwitterSquare } from "react-icons/fa";
import { FaSquareInstagram } from "react-icons/fa6";
import "./Copyright.css"
// ₹
const Copyright = () => {
	return (
		<div className='maincontainreofcopyright'>
			{/* first container */}
			<div className="firstcopyrightcontainer">
				<span className='twothousandairbnb'>© 2024 Airbnb, Inc.</span>
                <span className='luciicullink'>
				<Link href="/koko" className='privacysknil'>Privacy</Link>
				<Link href="/koko" className='termssknil'>Terms</Link>
				<Link href="/koko" className='sutemapsknil'>Sitemap</Link>
				<Link href="/koko" className='companysknil'>Company details</Link>
            </span>
                
			</div> 
			{/* second container */}
            <div className='secondcopyrightcontainer'>
                {/* first */}
             <div className='itemddivd globewaladsie'>
                <FiGlobe className='myfeetglobe' />  
                <span>English (IN)</span> 
             </div>
             {/* second */}
             <div className='itemddivd inrricht'>
             ₹ INR
             </div>
             {/* third -> logo container */}
             <div className='itemddivd socialmediaiconssir'>
                <FaFacebookSquare className='facebooknoci' size={20} />
                <FaTwitterSquare className='twitternoci' size={20} />
                <FaSquareInstagram className='instagramnoci' size={20} />
             </div>
            </div>
		</div>
	);
};

export default Copyright;
