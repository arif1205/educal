import React from "react";
import { NavLink } from "react-router-dom";
// components
import SingleCourse from "./SingleCourse";
// styles
import { Col, Container, Row } from "react-bootstrap";
// images
import singlecourse1 from "../../../images/single-course-1.jpg";
import singlecourse2 from "../../../images/single-course-2.jpg";
import singlecourse3 from "../../../images/single-course-3.jpg";
import singlecourse4 from "../../../images/single-course-4.jpg";

const CourseSample = () => {
	return (
		<div className='home__courses'>
			<Container>
				<Row className='align-items-end'>
					<Col md={8} lg={6}>
						<div className='home__courses-title'>
							<h2 className='section-title'>
								Online Courses
								<br /> For anyone, anywhere
							</h2>
							<p className='section-sub-title'>
								You don't have to struggle alone, you've got our assistance and
								help.
							</p>
						</div>
					</Col>
					<Col md={4} lg={6}>
						<div className='hero__courses-more mb-60 float-md-end fix'>
							<NavLink to='/courses' className='show-all'>
								View All Courses
								<i className='fas fa-arrow-right'></i>
							</NavLink>
						</div>
					</Col>
				</Row>
				<Row>
					<SingleCourse
						title='Product Manager Learn the Skills and job.'
						des='Top instructors from around the world teach millions of students on Quillow. Get unlimited.'
						img={singlecourse1}
						lesson={43}
					/>
					<SingleCourse
						title='The business Intelligence analyst Course 2022'
						des='Top instructors from around the world teach millions of students on Quillow. Get unlimited.'
						img={singlecourse2}
						lesson={30}
					/>
					<SingleCourse
						title='Bases Matemáticas dios Álgebra Ecuacion'
						des='Top instructors from around the world teach millions of students on Quillow. Get unlimited.'
						img={singlecourse3}
						lesson={22}
					/>
					<SingleCourse
						title='Fundamentals of music theory Learn new'
						des='Top instructors from around the world teach millions of students on Quillow. Get unlimited.'
						img={singlecourse4}
						lesson={18}
					/>
				</Row>
			</Container>
		</div>
	);
};

export default CourseSample;
