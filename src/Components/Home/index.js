import React from "react";
// components
import Header from "./Header";
import CommonAbout from "../Common/CommonAbout";
import CourseSample from "./CourseSample";
import TeacherSample from "./TeacherSample";

const Home = () => {
	return (
		<>
			<Header />
			<CommonAbout />
			<CourseSample />
			<TeacherSample />
		</>
	);
};

export default Home;
