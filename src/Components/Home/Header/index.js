import React from "react";
// styles
import { Button } from "react-bootstrap";

const Header = () => {
	return (
		<header>
			<div className='overlay'></div>
			<div className='header-container'>
				<p className='pre-title'>Learn &amp; Achive</p>
				<h1 className='title'>Find the right Online tutor for you.</h1>
				<p className='sub-title'>
					Meet university, and culture institutions, Who'll share their
					experience.
				</p>
				<Button href='#' variant='outline-light' className='header-btn'>
					Ready to get Started?
				</Button>
			</div>
		</header>
	);
};

export default Header;
