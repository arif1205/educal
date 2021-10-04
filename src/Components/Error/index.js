import React from "react";
import { NavLink } from "react-router-dom";
// styles
import { Button } from "react-bootstrap";
// images
import error from "../../images/error.png";

const Error = () => {
	return (
		<div className='error'>
			<div className='error-container'>
				<img src={error} alt='Error' className='mb-3' />
				<h1 className='error-title section-title text-center'>
					Page Not Found!
				</h1>
				<p className=' error-sub-title section-sub-title text-center mb-3'>
					Please try searching for some other page.
				</p>
				<div className='d-flex justify-content-center mb-3'>
					<Button as={NavLink} to='/'>
						Back to home
					</Button>
				</div>
			</div>
		</div>
	);
};

export default Error;
