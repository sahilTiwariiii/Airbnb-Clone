'use client'
import React from 'react'
import "../navbar/SearchMainComponent.css"
import { PiLineVerticalThin } from "react-icons/pi";
import { FaSearch } from "react-icons/fa";
const SearchMainComponent = () => {
  return (
    <>
        {/* parent container of the middle search container */}
        <div className='searchmaincontainerboos'>
            
            {/* first part */}
                <div className='firstanywherepart'>
                <p className='anywheretext'>Anywhere</p>
                </div>
                {/* line | */}
                <span className='verticallinevertical'>
                    <PiLineVerticalThin style={{ color: '#DDDDDD', width: '30px', height: '35px' }}
                     />
                </span>
            {/* middle part */}
            <div className='middlecontainerofsearch'>
           <p className='anyweaktext'>Anyweak</p>
            </div>
              {/* line | */}
              <span className='verticallinevertical'>
                    <PiLineVerticalThin style={{ color: '#DDDDDD', width: '30px', height: '35px' }}
                     />
                </span>
            {/* thrid part */}
            <div className='thirdsearchcontainer'>
               <p className='addgueststext'>Add guests</p>
                 {/* search image container */}
                 <div className='searchpinkcontainerpinky'>
                 <FaSearch className='fasearchlogohai' />
                    </div>
            </div>
               
            
        </div>
    </>
  )
}

export default SearchMainComponent