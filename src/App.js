import React from "react";
// components
import NavMenu from "./Components/Navbar";
import Home from "./Components/Home";
import Footer from "./Components/Footer";
// styles
import "bootstrap/dist/css/bootstrap.min.css";

function App() {
	return (
		<>
			<NavMenu />
			<Home />
			<Footer />
		</>
	);
}

export default App;
