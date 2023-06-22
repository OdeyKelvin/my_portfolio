import { useEffect, useRef } from 'react';
import { NavLink, Link, useLocation } from 'react-router-dom';
const Navbar = ({ handleMode }) => {
	const { pathname } = useLocation();
	const colorSchemeRef = useRef();
	let width = window.innerWidth;
	const handleamburger = () => {
		const navbar = document.querySelector('nav');
		const navlinks = document.querySelector('.navlinks');
		const alinks = document.querySelectorAll('nav ul li');
		const bars = document.querySelector('.bars');
		const close = document.querySelector('.xmark');
		bars.style.display = 'none';
		close.style.display = 'flex';
		navlinks.classList.add('navactive');
		alinks.forEach(i => i.classList.add('alinks'));
		navbar.classList.add('navbackdropfilterunset');
		const blur = document.querySelector('.blur');
		if (width <= 1000) blur.classList.add('bluractive');
		setTimeout(() => {
			colorSchemeRef.current.classList.add('colorSchemeMobile');
		}, 380);
		document.body.classList.add('navbodymobile');
	};

	const handleHamburgerClose = () => {
		const navbar = document.querySelector('nav');
		const navlinks = document.querySelector('.navlinks');
		let alinks = document.querySelectorAll('nav ul li');
		let bars = document.querySelector('.bars');
		let close = document.querySelector('.xmark');
		bars.style.display = 'flex';
		close.style.display = 'none';
		navlinks.classList.remove('navactive');
		alinks.forEach(i => i.classList.remove('alinks'));
		const blur = document.querySelector('.blur');
		blur.classList.remove('bluractive');
		navbar.classList.remove('navbackdropfilterunset');
		colorSchemeRef.current.classList.remove('colorSchemeMobile');
		document.body.classList.remove('navbodymobile');
	};
	useEffect(() => {
		const blur = document.querySelector('.blur');
		pathname !== '/resume' &&
			blur.addEventListener('click', () => {
				handleHamburgerClose();
			});
	});
	useEffect(() => {
		let navbar = document.querySelector('nav');
		if (
			pathname !== `/skills` &&
			pathname !== `/certficates` &&
			pathname !== `/resume` &&
			pathname !== `/contact`
		) {
			navbar.classList.remove('navscroll');
		}
	}, [pathname]);
	useEffect(() => {
		let navbar = document.querySelector('nav');
		let navheader = document.querySelector('nav h1');
		let navheaderstroke = document.querySelectorAll('nav h1 span');
		pathname !== '/resume' &&
			window.addEventListener('scroll', () => {
				if (window.scrollY > 50 && width <= 1000) {
					navbar.classList.add('navscrollmobile');
					navheader.classList.add('navheader');
					navheaderstroke[1].classList.replace('ib', 'navheaderstroke');
				} else if (window.scrollY > 50 && width > 1000) {
					navbar.classList.add('navscroll');
				} else {
					navbar.classList.remove('navscrollmobile');
					navheader.classList.remove('navheader');
					navheaderstroke[1].classList.replace('navheaderstroke', 'ib');
				}
			});
	}, [width, pathname]);

	useEffect(() => {
		const blur = document.querySelector('.blur');
		if (width <= 1000) {
			const links = document.querySelector('.navlinks');
			let bars = document.querySelector('.bars');
			let close = document.querySelector('.xmark');
			let alinks = document.querySelectorAll('nav ul li');
			alinks.forEach(i => {
				i.addEventListener('click', () => {
					links.classList.remove('navactive');
					bars.style.display = 'flex';
					close.style.display = 'none';
					alinks.forEach(i => {
						i.classList.remove('alinks');
						blur.classList.remove('bluractive');
						handleHamburgerClose();
					});
				});
			});
		}
	});

	return (
		pathname !== '/resume' && (
			<nav>
				<Link to={'/home'}>
					<h1>
						<span>MA</span>
						<span className="ib">Rk</span>
					</h1>
				</Link>
				<ul className="navlinks">
					<li className="first-child">
						<NavLink to={`/home`}>Home</NavLink>
					</li>
					<li>
						<NavLink to={`/skills`}>Skills</NavLink>
					</li>
					<li>
						<NavLink to={`/projects`}>Projects</NavLink>
					</li>
					<li>
						<NavLink to={`/about`}>About me</NavLink>
					</li>
					<li>
						<NavLink to={`/certificates`}>Certificates</NavLink>
					</li>
					<li>
						<NavLink to={`/contact`}>Contact</NavLink>
					</li>
					<section className="navfooter">
						<div>
							<a
								href="/"
								target="_blank"
								rel="noreferrer"
							>
								<i className="fab fa-github"></i>
							</a>
							<a
								href="/"
								target="_blank"
								rel="noreferrer"
							>
								<i className="fab fa-linkedin"></i>
							</a>
							<a
								href="/"
								target="_blank"
								rel="noreferrer"
							>
								<i className="fab fa-twitter"></i>
							</a>
							<a
								href="/"
								target="_blank"
								rel="noreferrer"
							>
								<i className="fab fa-facebook"></i>
							</a>
						</div>
						<p>&copy; Mark Coder, All rights reserved</p>
					</section>
				</ul>
				<div
					className="colorSchemeMobileHide"
					ref={colorSchemeRef}
					onClick={() => handleHamburgerClose()}
				>
					<i className="fas fa-toggle-on" onClick={handleMode}></i>
				</div>

				<div className="bars" onClick={handleamburger}>
					<i className="fas fa-grip-lines"></i>
				</div>
				<div className="xmark" onClick={handleHamburgerClose}>
					<i className="fas fa-xmark"></i>
				</div>
			</nav>
		)
	);
};

export default Navbar;
