import profile from '../images/profile.png';
import Footer from './Footer';
import Socials from './Socials';
import fed from '../images/fed.jpg';
import techgeek from '../images/tech-geek.jpeg';
import otaku from '../images/otaku.jpg';
import Navbar from './Navbar';

const About = () => {
	return (
		<>
			<Navbar />
			<article className="about-page">
				<div className="App-bg"></div>
				<h1>About Me</h1>
				<div className="about-content">
					<img src={profile} alt="profile" />
					<div>
						<p>
							A Frontend Web Developer with 3 years of web development
							experience. I spend my whole day, practically everyday expanding
							my skills, I love getiing my hands on projects that looks complex
							to me and its fun been able to complete it at the end. I have
							experience with React, Next JS, Node JS, Express, HTML, CSS,
							JavaScript, TypeScript, JQuery, and React Native. I've built
							different projects and UI landing pages with them. I'm interested
							in all things tech and currently expanding my knowledge and
							skillset. I'm also an undergraguate student studying Computer
							Engineering in Bayero University, Kano. I'm currently open up to
							work and Interships.
						</p>
						<a href="https://drive.google.com/file/d/1v-v_5hswC6SfGum7gXi72iWjkpm_jqCv/view?usp=sharing">
							Open Resume
						</a>
					</div>
				</div>
				<div className="about-footer">
					<img src={fed} alt="fed" />
					<img src={techgeek} alt="tech-geek" />
					<img src={otaku} alt="otauk" />
				</div>
				<Socials />
				<Footer />
			</article>
		</>
	);
};

export default About;
