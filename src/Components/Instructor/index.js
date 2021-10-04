import React, { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
// components
import SectionHeader from "../Common/SectionHeader";
import Teacher from "../Home/TeacherSample/Teacher";
// styles
import { Col, Container, Row, Button } from "react-bootstrap";
// images
import bg from "../../images/instructor-bg.jpg";

const Instructor = () => {
	const [teachers, setTeachers] = useState([]);

	useEffect(() => {
		const loadData = async () => {
			const res = await fetch("./instructor.json");
			const data = await res.json();
			setTeachers(data);
		};
		loadData();
	}, []);

	return (
		<>
			<SectionHeader bg={bg} title='Instructor' />
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
					<Row className='justify-content-between g-4'>
						{teachers.map((teacher, i) => (
							<Col md={4} key={i} className='mb-3 mb-md-0'>
								<Teacher
									img={teacher.img}
									name={teacher.name}
									role={teacher.role}
								/>
							</Col>
						))}
					</Row>
					<Row className='teacher-btn'>
						<Button as={NavLink} to='/contact' variant='outline-light'>
							Become an Instructor
						</Button>
					</Row>
				</Container>
			</div>
		</>
	);
};

export default Instructor;
