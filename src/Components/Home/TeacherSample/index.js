import React from "react";
import { NavLink } from "react-router-dom";
// components
import Teacher from "./Teacher";
// styles
import { Col, Container, Row, Button } from "react-bootstrap";
// images
import teacher1 from "../../../images/teacher-1.jpg";
import teacher2 from "../../../images/teacher-2.jpg";
import teacher3 from "../../../images/teacher-3.jpg";

const TeacherSample = () => {
	return (
		<div className='teachers'>
			<Container>
				<Row className='teachers-header'>
					<Col>
						<h1 className='section-title text-center'>
							Our Most <br /> Popular Teachers
						</h1>
						<p className='section-sub-title text-center'>
							You don't have to struggle alone, you've got our assistance and
							help.
						</p>
					</Col>
				</Row>
				<Row className='justify-content-between gx-4'>
					<Col md={4} className='mb-3 mb-md-0'>
						<Teacher img={teacher1} name='Lillian Walsh' role='CO Founder' />
					</Col>
					<Col md={4} className='mb-3 mb-md-0'>
						<Teacher img={teacher2} name='Kelly Franklin' role='Desginer' />
					</Col>
					<Col md={4}>
						<Teacher img={teacher3} name='Hilary Ouse' role='Markater' />
					</Col>
				</Row>
				<Row className='teacher-btn'>
					<Button as={NavLink} to='/contact' variant='outline-light'>
						Become an Instructor
					</Button>
				</Row>
			</Container>
		</div>
	);
};

export default TeacherSample;
