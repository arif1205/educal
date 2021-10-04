import React from "react";
import { NavLink } from "react-router-dom";
// styles
import { Col, Container, Row } from "react-bootstrap";
// images
import about from "../../images/about.jpg";
import aboutBanner from "../../images/about-banner.jpg";
import partner1 from "../../images/partner-1.png";
import partner2 from "../../images/partner-2.png";
import partner3 from "../../images/partner-3.png";
import partner4 from "../../images/partner-4.png";
import partner5 from "../../images/partner-5.png";
import partner6 from "../../images/partner-6.png";

const CommonAbout = () => {
	return (
		<>
			<div className='achievement'>
				<Container>
					<Row>
						<Col md={6}>
							<div className='achievement-img'>
								<div className='about-img'>
									<img src={about} alt='about' />
								</div>
								<div className='about-banner'>
									<img src={aboutBanner} alt='about-banner' />
								</div>
							</div>
						</Col>
						<Col md={6}>
							<div className='about-content'>
								<div className='about-content-header'>
									<h1 className='section-title'>
										Achieve Your Goals With Educal
									</h1>
									<p className='section-sub-title'>
										Lost the plot bobby such a fibber bleeding bits and bobs
										don't get shirty with me bugger all mate chinwag super pukka
										william barney, horse play buggered.
									</p>
								</div>
								<div className='about-content-list'>
									<ul className='list-unstyled list-inline'>
										<li className='d-flex align-items-center'>
											<i class='fas fa-check'></i>
											<span>Upskill your organization</span>
										</li>
										<li className='d-flex align-items-center'>
											<i class='fas fa-check'></i>
											<span>Access more then 100K online courses</span>
										</li>
										<li className='d-flex align-items-center'>
											<i class='fas fa-check'></i>
											<span>Learn the latest skills</span>
										</li>
										<li className='d-flex align-items-center'>
											<i class='fas fa-check'></i>
											<span>Join over 4,000+ students</span>
										</li>
									</ul>
								</div>
							</div>
						</Col>
					</Row>
				</Container>
			</div>
			<div className='partners'>
				<Container>
					<Row>
						<Col>
							<h2 class='partner-title'>
								Trusted by 100 world's best companies
							</h2>
						</Col>
					</Row>
					<Row>
						<Col>
							<div className='d-flex justify-content-between brands'>
								<img src={partner1} alt='brand' />
								<img src={partner2} alt='brand' />
								<img src={partner3} alt='brand' />
								<img src={partner4} alt='brand' />
								<img src={partner5} alt='brand' />
								<img src={partner6} alt='brand' />
							</div>
						</Col>
					</Row>
					<Row>
						<Col>
							<div class='all-partner text-center'>
								<NavLink to='/about' className='show-all'>
									View all partners
									<i class='fas fa-arrow-right'></i>
								</NavLink>
							</div>
						</Col>
					</Row>
				</Container>
			</div>
		</>
	);
};

export default CommonAbout;
