import React, { useEffect } from "react";
import { Container, Nav, Navbar } from "react-bootstrap";
// images
import logo from "../../images/logo.png";
import logoLight from "../../images/logo-light.png";

const NavMenu = () => {
	useEffect(() => {
		const navMenu = document.querySelector(".nav-menu");
		const navBar = document.querySelector(".nav-bar");
		const imgLogo = document.querySelector("#logo");

		const changeTheme = () => {
			if (
				document.body.scrollTop > 20 ||
				document.documentElement.scrollTop > 20
			) {
				navMenu.classList.add("light-theme");
				navBar.classList.remove("nav-bar-dark");
				navBar.classList.add("nav-bar-light");
				imgLogo.src = logoLight;
			} else {
				navMenu.classList.remove("light-theme");
				navBar.classList.add("nav-bar-dark");
				navBar.classList.remove("nav-bar-light");
				imgLogo.src = logo;
			}
		};

		window.addEventListener("scroll", changeTheme);
	}, []);

	return (
		<Navbar
			collapseOnSelect
			expand='lg'
			variant='light'
			fixed='top'
			className='py-4 nav-bar nav-bar-dark'>
			<Container>
				<Navbar.Brand href='/home' className='me-5'>
					<img src={logo} alt='logo' id='logo' />
				</Navbar.Brand>
				<Navbar.Toggle aria-controls='responsive-navbar-nav' />
				<Navbar.Collapse id='responsive-navbar-nav'>
					<Nav className='me-auto nav-menu'>
						<Nav.Link href='/courses'>Courses</Nav.Link>
						<Nav.Link href='/about'>About</Nav.Link>
						<Nav.Link href='/contact'>Contact</Nav.Link>
						<Nav.Link href='/blog'>Blog</Nav.Link>
					</Nav>
				</Navbar.Collapse>
			</Container>
		</Navbar>
	);
};

export default NavMenu;
