import { NavLink } from 'react-router-dom';

const Sidenav = () => {
	return (
		<section className="sidenav">
			<NavLink to={`/home`}></NavLink>
			<NavLink to={`/skills`}></NavLink>
			<NavLink to={`/projects`}></NavLink>
			<NavLink to={`/about`}></NavLink>
			<NavLink to={`/resume`}></NavLink>
			<NavLink to={`/contact`}></NavLink>
		</section>
	);
};

export default Sidenav;
