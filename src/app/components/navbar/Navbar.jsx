'use client';
import React, { useState } from 'react';
import '../navbar/Navbar.css';
import appLogoImage from '/public/images/logo.png';
import appLogoSecondImage from '/public/images/airbnb-mobile.webp';
import Image from 'next/image';
import SearchMainComponent from './SearchMainComponent';
import RightContainerNavbar from './RightContainerNavbar';
import LoginAndRegisterDialogBox from './LoginAndRegisterDialogBox';
const Navbar = () => {
	const [ isOpen, setIsOpen ] = useState(false);

	
	return (
    <>		<header>
    <div className=" mainheadercontianer">
      {/* logo */}
      <div className=" logocontainerairbnb">
        <Image src={appLogoImage} height={35} width={100} alt="app logo" className="firstimageairbnb" />
        <Image src={appLogoSecondImage} className="secondimageairbnb" alt='fdfs' />
      </div>
      {/* middle search container */}
      <div className='searchmainmainsearch'>
        <SearchMainComponent />
      </div>
      {/* right side container */}
      <div>
        <RightContainerNavbar isOpen={isOpen} setIsOpen={setIsOpen} />

               {/* open dialog box */}
          
    {isOpen&& (<div className="openandcloseauthdialogbox" >
     <LoginAndRegisterDialogBox/>
    </div>)}
      </div>
    </div>
  
  </header>
      
          {/* open dialog box */}
          
    {/* {isOpen&& (<div className="openandcloseauthdialogbox" >
     <LoginAndRegisterDialogBox/>
    </div>)} */}

    </>

	);
};

export default Navbar;
