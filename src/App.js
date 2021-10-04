import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
// components
import Navbar from "./Components/Navbar";
import Home from "./Components/Home";
import Courses from "./Components/Courses";
import About from "./Components/About";
import Contact from "./Components/Contact";
import Instructor from "./Components/Instructor";
import Footer from "./Components/Footer";
import Error from "./Components/Error";
// styles
import "bootstrap/dist/css/bootstrap.min.css";

function App() {
	return (
		<Router>
			<Navbar />
			<Switch>
				<Route exact path='/'>
					<Home />
				</Route>
				<Route exact path='/courses'>
					<Courses />
				</Route>
				<Route exact path='/about'>
					<About />
				</Route>
				<Route exact path='/contact'>
					<Contact />
				</Route>
				<Route exact path='/instructor'>
					<Instructor />
				</Route>
				<Route>
					<Error />
				</Route>
			</Switch>
			<Footer />
		</Router>
	);
}

export default App;
