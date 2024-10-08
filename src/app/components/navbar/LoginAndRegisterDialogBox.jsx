'use client'

import React from 'react'
import "../navbar/LoginAndRegisterDialogBox.css"
import { openModel } from '@/reduxtoolkit/features/LoginandRegisterModelSlice'
import { useDispatch } from 'react-redux'
import { openListingModal } from '@/reduxtoolkit/features/ListingModalOpenAndClose'

 

const LoginAndRegisterDialogBox = () => {
  const dispatch=useDispatch() // call Dispatch at the top level
      // Event handler function to dispatch the action
      const handleOpenModel = () => {
        dispatch(openModel());
    };
   const handleOpenandCloseListingModal=()=>{
    dispatch(openListingModal())
   }
  
  return (
    <div className='mainauthairbnbboxsmall'>
      {/* all the links container */}
      {/* first link ----> Sign Up */}
      <div onClick={handleOpenModel} className="authboxsignup">
        <h4 className="textinsideauthbox signuppopopo">Sign up</h4>
      </div>
      {/* second link ----> Log in */}
      <div onClick={handleOpenModel} className="authboxsignup">
        <h4 className="textinsideauthbox">Log in</h4>
      </div>
      {/* hr line  */}
      <hr className="mainauthairbnbhrline" />

      {/* third link ----> Airbnb your home */}
      <div onClick={handleOpenandCloseListingModal} className="authboxsignup">
        <h4 className="textinsideauthbox">Airbnb your home</h4>
      </div>
      {/* fourth link ----> Host an experience */}
      <div className="authboxsignup">
        <h4 className="textinsideauthbox">Host an experience</h4>
      </div>
      {/* fifth link ----> Help Center */}
      <div className="authboxsignup lolulou">
        <h4 className="textinsideauthbox">Help Center</h4>
      </div>
    </div>
  )
}

export default LoginAndRegisterDialogBox