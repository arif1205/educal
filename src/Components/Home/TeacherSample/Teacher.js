import React from "react";

const Teacher = ({ img, role, name }) => {
	return (
		<div className='teacher'>
			<div className='teacher-profile'>
				<img src={img} alt='profile' />
			</div>
			<div className='teacher-intro'>
				<div className='teacher-title'>
					<span className='name'>{name}</span>,{" "}
					<span className='role'>{role}</span>
				</div>
				<div className='teacher-contact'>
					<ul className='list-unstyled list-inline d-flex justify-content-center'>
						<li>
							<a href='#'>
								<i className='fab fa-facebook-f'></i>
							</a>
						</li>
						<li>
							<a href='#'>
								<i className='fab fa-twitter'></i>
							</a>
						</li>
						<li>
							<a href='#'>
								<i className='fab fa-whatsapp'></i>
							</a>
						</li>
					</ul>
				</div>
			</div>
		</div>
	);
};

export default Teacher;
