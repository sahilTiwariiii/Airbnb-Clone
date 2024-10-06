'use client';
import React, { useState } from 'react'
import "./BeachFooterCon.css"
import { beachdata } from './footerdata/beachdata';
import Link from 'next/link';
import { RiArrowDropDownLine } from 'react-icons/ri';

const BeachFooterCon = () => {
    // State to track if "Show more" is clicked
    const [showMore, setShowMore] = useState(false);

    // Function to handle "Show more" button click
    const handleShowMore = () => {
      setShowMore(true);  // Set showMore to true to display all items
    };
  
    // Slice the items if showMore is false
    const displayedItems = showMore ? beachdata : beachdata.slice(0, 17);
  return (
    <div className="niamiahey">
    {displayedItems.map((item)=>(
       <>
       <div key={item.id} className="bougnfjg">
       <Link className="linkssknilrut" href="/f">
                       {item.linkcontent}
                   </Link>
                   <h3 className="tepyldneirf">{item.htagdata}</h3>
       </div>
       </>
    ))}
           {/* Show "Show more" button only if showMore is false */}
      {!showMore && (
        <div className="bougnfjg">
          <div className="hsdhfd" onClick={handleShowMore}>
            <Link className="linkssknilrut" href="#">
              Show more
            </Link>
            <RiArrowDropDownLine fontSize={20} size={30} />
          </div>
        </div>
      )}
           
           </div>
  )
}

export default BeachFooterCon