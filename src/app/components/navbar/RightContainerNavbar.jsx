'use client'
import React from 'react'
import "../navbar/RightContainerNavbar.css"
import { HiOutlineGlobeAlt } from "react-icons/hi";
import { AiOutlineMenu } from "react-icons/ai";
import userIconImage from "/public/images/placeholder.jpg"
import Image from 'next/image';
import { useDispatch } from 'react-redux';
import { openListingModal } from '@/reduxtoolkit/features/ListingModalOpenAndClose';

const RightContainerNavbar = ({isOpen,
  setIsOpen}) => {

  const userIconandHamburgerIconClick=()=>{
    setIsOpen((prev) => !prev);
  }
  const dispatch=useDispatch()
  // Sending action to Open the Modal
  const handleOpenListingModal=()=>{
    dispatch(openListingModal())
  }
  return (
    <>
    {/* main container */}
    <div className='mainrightcontainer'>

      {/* first -> Airnub to you home */}

      <div onClick={handleOpenListingModal} className='airbnbyourhome'>
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