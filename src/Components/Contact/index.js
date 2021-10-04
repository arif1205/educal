import React from "react";
// components
import Header from "../Common/SectionHeader";
// styles
import {
	Container,
	Row,
	Col,
	Button,
	Form,
	FloatingLabel,
} from "react-bootstrap";
// images
import bg from "../../images/contact-bg.jpg";

const About = () => {
	return (
		<>
			<Header bg={bg} title='Contact' />
			<div className='contact'>
				<Container>
					<Row>
						<Col md={8}>
							<div className='contact-content pb-5'>
								<h1 className='section-title'>Get Intouch</h1>
								<p className='section-sub-title'>
									Have a question or just want to say hi? We'd love to hear from
									you.
								</p>
							</div>
							<div className='contact-form'>
								<Form>
									<Row className='mb-3'>
										<Form.Group as={Col} controlId='formGridName'>
											<Form.Control type='text' placeholder='Your Name' />
										</Form.Group>

										<Form.Group as={Col} controlId='formGridEmail'>
											<Form.Control type='email' placeholder='Your email' />
										</Form.Group>
									</Row>

									<Form.Group className='mb-3' controlId='formGridAddress1'>
										<Form.Control placeholder='Subject' type='text' />
									</Form.Group>

									<Form.Group className='mb-3'>
										<FloatingLabel controlId='floatingTextarea2'>
											<Form.Control
												as='textarea'
												placeholder='Leave a comment here'
												style={{ height: "100px" }}
											/>
										</FloatingLabel>
									</Form.Group>

									<Button variant='primary' type='submit'>
										Send Your Message
									</Button>
								</Form>
							</div>
						</Col>
					</Row>
				</Container>
			</div>
		</>
	);
};

export default About;
