'use client'
import React from 'react'
import "../navbar/RightContainerNavbar.css"
import { HiOutlineGlobeAlt } from "react-icons/hi";
import { AiOutlineMenu } from "react-icons/ai";
import userIconImage from "/public/images/placeholder.jpg"
import Image from 'next/image';

const RightContainerNavbar = ({isOpen,
  setIsOpen}) => {

  const userIconandHamburgerIconClick=()=>{
    setIsOpen((prev) => !prev);
  }
  return (
    <>
    {/* main container */}
    <div className='mainrightcontainer'>

      {/* first -> Airnub to you home */}

      <div className='airbnbyourhome'>
        <h3>Airbnb your home</h3>
      </div>

      {/* second -> website logo */}

      <div className='cartoonwebsitelogo'>
       <HiOutlineGlobeAlt className='globeiconimage'/>
      </div>
     
      {/* third -> hamburger and user icon */}
      <div className='lastuserandhamburgercontainer' onClick={userIconandHamburgerIconClick}>

      <AiOutlineMenu className='aioutlinemenuicon' />
       <Image src={userIconImage} className='usericonimageright'/>

      </div> 

    </div>
    </>
  )
}

export default RightContainerNavbar