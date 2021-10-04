import React, { useState, useEffect } from "react";
// components
import SectionHeader from "../Common/SectionHeader";
import Course from "./Course";
// styles
import { Container, Row, Col } from "react-bootstrap";
// images
import bg from "../../images/courses-bg.png";

const Courses = () => {
	const [courses, setCourses] = useState([]);

	useEffect(() => {
		const loadData = async () => {
			const res = await fetch("./courses.json");
			const data = await res.json();
			setCourses(data);
		};
		loadData();
	}, []);

	return (
		<>
			<SectionHeader bg={bg} title='Courses' />
			<div className='courses-container'>
				<Container>
					<Row className='justify-content-between g-4'>
						{courses.map((course, i) => (
							<Col md={4} key={i} className='mb-3 mb-md-0'>
								<Course
									title={course.title}
									instructor={course.instructor}
									rating={course.rating}
									lesson={course.lesson}
									total={course.total}
									price={course.price}
									instructorImg={course.instructorImg}
									cover={course.cover}
								/>
							</Col>
						))}
					</Row>
				</Container>
			</div>
		</>
	);
};

export default Courses;
