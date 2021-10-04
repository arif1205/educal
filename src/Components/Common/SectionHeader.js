import React from "react";
import { Link } from "react-router-dom";

const SectionHeader = ({ bg, title }) => {
	return (
		<header style={{ height: "70vh", backgroundImage: `url(${bg})` }}>
			<div className='overlay'></div>
			<div className='header-container'>
				<h1 className='title'>{title}</h1>
				<p className='sub-title'>
					<Link to='/' style={{ color: "#fff" }}>
						Home
					</Link>{" "}
					/ {title}
				</p>
			</div>
		</header>
	);
};

export default SectionHeader;
