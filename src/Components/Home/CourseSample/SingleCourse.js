import React from "react";
import { NavLink } from "react-router-dom";
// styles
import { Col } from "react-bootstrap";

const SingleCourse = ({ title, img, des, lesson }) => {
	return (
		<Col md={6}>
			<div className='single-course'>
				<div className='thumb'>
					<img src={img} alt='thumbnail' />
				</div>
				<div className='content'>
					<h3 class='single-course-title'>
						<NavLink to='/courses'>{title}</NavLink>
					</h3>
					<p className='single-course-sub-title'>{des}</p>
					<div class='single-course-lesson'>
						<span>
							<i class='fas fa-book'></i>
							{lesson} Lesson
						</span>
					</div>
				</div>
			</div>
		</Col>
	);
};

export default SingleCourse;
