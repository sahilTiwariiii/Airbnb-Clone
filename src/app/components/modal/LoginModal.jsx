'use client'; // Enables client-side rendering in Next.js 14

import React, { useState } from 'react';
import { RxCross2 } from 'react-icons/rx';
import './LoginModal.css';
import Link from 'next/link';
import { FcGoogle } from 'react-icons/fc';
import { RiFacebookBoxFill } from 'react-icons/ri';
import { SiApple } from 'react-icons/si';
import { FaGithub } from 'react-icons/fa6';
import { useForm, handleSubmit, register } from 'react-hook-form';
import { useDispatch, useSelector } from 'react-redux';
import { closeModel, openModel } from '@/reduxtoolkit/features/LoginandRegisterModelSlice';

const LoginModal = () => { 
	const [ toogleStateLaS, setToogleStateLaS ] = useState(false);
  // toogle between login and register 
  const toogleLoginandRegister=()=>{
    setToogleStateLaS((prev) => !prev); // Correct
  }
	// Initializing react form hook
	const { register, handleSubmit, formState: { errors } } = useForm();
	const onSubmitLoginForm = (data) => {
		console.log(data);
	};
	const onSubmitRegisterForm=(data)=>{
		console.log(data)
	}

	const myLoginandRegisterModelState=useSelector((state)=>state.loginandregister)

	const dispatch=useDispatch() // call Dispatch at top level
	// function for closing the mode=al
	const handleCloseModal=()=>{
		dispatch(closeModel())
	}
	return (
		<>
		{myLoginandRegisterModelState && (
			<div className="modal-overlay">
			{toogleStateLaS ? (
				// Register Container
				<div className="modal">
					{/* Modal header */}
					<div className="modal-header">
						{/* x icon */}
						<button onClick={handleCloseModal} className="close-btn">
							<RxCross2 size={20} />
						</button>
						{/* heading */}
						<h2 className="modal-heading">Register</h2>
					</div>
					{/* hr line */}
					<div className="enilrhctudf" />
					<h1 className="emoclewotbnbria">Welcome to Airbnb</h1>
					{/*add the rest of your login form or modal content here */}
					{/* handleSubmit() is provided by react-hook-form and onSubmitLoginForm is our function */}
					<form onSubmit={handleSubmit(onSubmitRegisterForm)}>
						<div className="mrofmrof">
							<input
								{...register('email', {
									required: 'Email is required',
									pattern: {
										// pattern is just for validation that the user can give the valid email not anything
										value: /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/, // Regex to validate email
										message: 'Enter a valid email address'
									}
								})}
								placeholder="Email"
								className="paisatpixel bvhdery"
								type="text"
							/>
							{/* if email field is empty then show error */}
							{errors.email && <p className="error-message">{errors.email.message}</p>}

							<input
								{...register('name', {
									required: 'Name is required',
									minLength: {
										value: 3, // Minimum length of 3 characters
										message: 'Name must be at least 3 characters long'
									}
								})}
								placeholder="Name"
								className="paisatpixel bvhdery"
								type="text"
							/>
							{errors.name && <p className="error-message">{errors.name.message}</p>}

							<input
								{...register('password', {
									required: 'Password is required',
									// Password should be greated than 6
									minLength: {
										value: 6, // Minimum length of 6 characters
										message: 'Password must be at least 6 characters long'
									}
								})}
								placeholder="Password"
								className="paisatpixel bvhdery"
								type="text"
							/>
							{/* if password field is empty then show error */}
							{errors.password && <p className="error-message">{errors.password.message}</p>}
							<span className="smallyyllams">
								We’ll call or text you to confirm your number. Standard message and data rates apply.{' '}
								<Link className="ycilopycaviirp" href="/helpcenter">
									Privacy Policy
								</Link>
							</span>
						</div>
						{/* button */}
						<button type="submit" className="eunitnocdf">
							Continue
						</button>
					</form>
					{/* Horizontal line with "or" */}
					<div className="line-container">
						<span className="line-text">or</span>
					</div>
					{/* Social login butotn container */}

					<div className="socialoginsbutloginssfr">
						{/* first button */}
						<div className="socialloginnigollaicos">
							{/* image contianer */}
							<div className="egamireaitnoc">
								<RiFacebookBoxFill color="#1877F2" size={20} />
							</div>

							{/* text */}
							<div className="txetrenitnoc">Continue with Facebook</div>
						</div>
						{/* seccond button */}
						<div className="socialloginnigollaicos">
							{/* image contianer */}
							<div className="egamireaitnoc">
								<FcGoogle size={20} />
							</div>

							{/* text */}
							<div className="txetrenitnoc">Continue with Google</div>
						</div>
						{/* third button */}
						<div className="socialloginnigollaicos">
							{/* image contianer */}
							<div className="egamireaitnoc">
								<SiApple size={20} />
							</div>

							{/* text */}
							<div className="txetrenitnoc">Continue with Apple</div>
						</div>
						{/* fourth button */}
						<div className="socialloginnigollaicos">
							{/* image contianer */}
							<div className="egamireaitnoc">
								<FaGithub size={20} />
							</div>

							{/* text */}
							<div className="txetrenitnoc">Continue with Github</div>
						</div>
					</div>
					<span className="additionallanoitidda">
						Already have an Account ? &nbsp;
						<span className="dokhlaalhkofd" onClick={toogleLoginandRegister}>Login</span>
					</span>
				</div>
			) : (
				// login container
				<div className="modal">
					{/* Modal header */}
					<div className="modal-header">
						{/* x icon */}
						<button onClick={handleCloseModal} className="close-btn">
							<RxCross2 size={20} />
						</button>
						{/* heading */}
						<h2 className="modal-heading">Login</h2>
					</div>
					{/* hr line */}
					<div className="enilrhctudf" />
					<h1 className="emoclewotbnbria">Welcome to Airbnb</h1>
					{/* You can add the rest of your login form or modal content here */}
					{/* handleSubmit() is provided by react-hook-form and onSubmitLoginForm is our function */}
					<form onSubmit={handleSubmit(onSubmitLoginForm)}>
						<div className="mrofmrof">
							<input
								{...register('email', {
									required: 'Email is required',
									pattern: {
										// pattern is just for validation that the user can give the valid email not anything
										value: /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/, // Regex to validate email
										message: 'Enter a valid email address'
									}
								})}
								placeholder="Email"
								className="paisatpixel bvhdery"
								type="text"
							/>
							{/* if email field is empty then show error */}
							{errors.email && <p className="error-message">{errors.email.message}</p>}

							<input
								{...register('password', {
									required: 'Password is required',
									// Password should be greated than 6
									minLength: {
										value: 6, // Minimum length of 6 characters
										message: 'Password must be at least 6 characters long'
									}
								})}
								placeholder="Password"
								className="paisatpixel bvhdery"
								type="text"
							/>
							{/* if password field is empty then show error */}
							{errors.password && <p className="error-message">{errors.password.message}</p>}
							<span className="smallyyllams">
								We’ll call or text you to confirm your number. Standard message and data rates apply.{' '}
								<Link className="ycilopycaviirp" href="/helpcenter">
									Privacy Policy
								</Link>
							</span>
						</div>
						{/* button */}
						<button type="submit" className="eunitnocdf">
							Continue
						</button>
					</form>
					{/* Horizontal line with "or" */}
					<div className="line-container">
						<span className="line-text">or</span>
					</div>
					{/* Social login butotn container */}

					<div className="socialoginsbutloginssfr">
						{/* first button */}
						<div className="socialloginnigollaicos">
							{/* image contianer */}
							<div className="egamireaitnoc">
								<RiFacebookBoxFill color="#1877F2" size={20} />
							</div>

							{/* text */}
							<div className="txetrenitnoc">Continue with Facebook</div>
						</div>
						{/* seccond button */}
						<div className="socialloginnigollaicos">
							{/* image contianer */}
							<div className="egamireaitnoc">
								<FcGoogle size={20} />
							</div>

							{/* text */}
							<div className="txetrenitnoc">Continue with Google</div>
						</div>
						{/* third button */}
						<div className="socialloginnigollaicos">
							{/* image contianer */}
							<div className="egamireaitnoc">
								<SiApple size={20} />
							</div>

							{/* text */}
							<div className="txetrenitnoc">Continue with Apple</div>
						</div>
						{/* fourth button */}
						<div className="socialloginnigollaicos">
							{/* image contianer */}
							<div className="egamireaitnoc">
								<FaGithub size={20} />
							</div>

							{/* text */}
							<div className="txetrenitnoc">Continue with Github</div>
						</div>
					</div>
					<span className="additionallanoitidda">
						First time using Airbnb ? &nbsp;
						<span className="dokhlaalhkofd" onClick={toogleLoginandRegister}>Create an Account</span>
					</span>
				</div>
			)}
		</div>
		)	
	}
	</>
	);
};

export default LoginModal;
