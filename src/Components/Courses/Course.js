import React from "react";

const Course = (props) => {
	const {
		title,
		instructor,
		rating,
		lesson,
		total,
		price,
		instructorImg,
		cover,
	} = props;
	return (
		<div className='course-container'>
			<div className='course-img'>
				<img src={cover} alt='course cover' />
			</div>
			<div className='course-content'>
				<div className='content-top d-flex justify-content-between'>
					<div className='lesson'>
						<i className='fas fa-book'></i> {lesson} lesson
					</div>
					<div className='rating'>
						<i className='fas fa-star'></i> {rating} ({total})
					</div>
				</div>
				<a href='#' className='course-title'>
					{title}
				</a>
				<div className='course-instructor d-flex'>
					<img src={instructorImg} alt='instructor' />
					<p>{instructor}</p>
				</div>
				<div className='price'>
					{price ? `$${price}` : <span class='free'>Free</span>}
				</div>
			</div>
		</div>
	);
};

export default Course;
