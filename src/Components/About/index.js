import React from "react";
import { NavLink } from "react-router-dom";
// components
import Header from "../Common/SectionHeader";
import CommonAbout from "../Common/CommonAbout";
// styles
import { Container, Row, Col, Button } from "react-bootstrap";
// images
import bg from "../../images/about-bg.jpg";
import whyMe from "../../images/why.png";

const About = () => {
	return (
		<>
			<Header bg={bg} title='About' />
			<CommonAbout />
			<div className='why-me'>
				<Container>
					<Row>
						<Col md={6} className='align-self-center'>
							<div className='why-me-content'>
								<p className='pre-title'>Why choose me</p>
								<p className='section-title'>Tools For Teachers And Learners</p>
								<p className='section-sub-title'>
									Oxford chimney pot Eaton faff about blower blatant brilliant,
									bubble and squeak he legged it Charles bonnet arse at public
									school bamboozled.
								</p>
								<Button as={NavLink} to='/contact'>
									Join for free
								</Button>
							</div>
						</Col>
						<Col md={6}>
							<div className='why-me-img'>
								<img src={whyMe} alt='why' />
							</div>
						</Col>
					</Row>
				</Container>
			</div>
		</>
	);
};

export default About;
