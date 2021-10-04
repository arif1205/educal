import React from "react";
import { NavLink } from "react-router-dom";
// styles
import { Container, Row, Col } from "react-bootstrap";
// images
import logo from "../../images/logo.png";

const Footer = () => {
	return (
		<footer>
			<Container>
				<Row className='justify-content-between'>
					<Col md={4}>
						<div className='left-footer'>
							<div className='logo'>
								<img src={logo} alt='logo' />
							</div>
							<p>
								Great lesson ideas and lesson plans for ESL teachers! Educators
								can customize lesson plans to best.
							</p>
							<div className='footer-social'>
								<ul className='list-unstyled list-inline d-flex'>
									<li>
										<a href='#' className='facebook'>
											<i className='fab fa-facebook-f'></i>
										</a>
									</li>
									<li>
										<a href='#' className='twitter'>
											<i className='fab fa-twitter'></i>
										</a>
									</li>
									<li>
										<a href='#' className='pinterest'>
											<i className='fab fa-pinterest'></i>
										</a>
									</li>
								</ul>
							</div>
						</div>
					</Col>
					<Col md={4}>
						<div className='company'>
							<h3 className='company-title'>Company</h3>
							<ul className='list-unstyled list-inline d-flex'>
								<li>
									<NavLink to='/courses'>Courses</NavLink>
								</li>
								<li>
									<NavLink to='/about'>About</NavLink>
								</li>
								<li>
									<NavLink to='/instructor'>Instructor</NavLink>
								</li>
								<li>
									<NavLink to='/contact'>Contact</NavLink>
								</li>
							</ul>
						</div>
					</Col>
				</Row>
			</Container>
		</footer>
	);
};

export default Footer;
