import html from '../images/html.png';
import css from '../images/css.png';
import js from '../images/JS.png';
import react from '../images/react.png';
import jquery from '../images/jquery.svg';
import git from '../images/git.svg';
import typescript from '../images/typescript.png';
import next from '../images/next.png';
import Socials from './Socials';
import Footer from './Footer';
import Navbar from './Navbar';

const Skills = () => {
	return (
		<>
			<Navbar />
			<article className="skills">
				<h1>Skills & Experiences</h1>
				<div>
					<section className="skills-logo">
						<p className="image">
							<img src={html} alt="html" />
							HTML
						</p>
						<p className="image css-logo">
							<img src={css} alt="css" />
							CSS
						</p>
						<p className="image js-logo">
							<img src={js} alt="js" />
							JavaScrpit
						</p>
						<p className="image react-logo">
							<img src={react} alt="react" />
							React
						</p>
						<p className="image next-logo">
							<img src={next} alt="next" style={{ objectFit: 'contain' }} />
							Next JS
						</p>
						<p className="image jq-logo">
							<img src={jquery} alt="jquery" />
							Jquery
						</p>
						<p className=" typescript-logo">
							<img src={typescript} alt="typescipt" />
							TypeScript
						</p>
						<p className="image react-logo">
							<img src={react} alt="react" />
							React Native
						</p>
						<p className="image">
							<img src={git} alt="git" />
							GIT
						</p>
					</section>
					<section className="work-exp">
						<div>
							<div>2022</div>
							<div>
								<h1>Internship at Crediometer</h1>
								<p>Implemented UI Components and making use of API calls</p>
								<h1>Personal Project | Mabifus Health Care</h1>
								<p>A health care website using with user authentication using Next JS</p>
								<h1>Personal Project | User Portfolio</h1>
								<p>Qoreeb Portfolio</p>
								<h1>Personal Project | AptLearn</h1>
								<p>AptLearn Homepage challenge by APtlearn ceo</p>
							</div>
						</div>
						<div>
							<div>2021</div>
							<div>
								<h1>Personal Project | Skillers</h1>
								<p>Skillers Music Page</p>
								<h1>Personal Project | Metaverse</h1>
								<p>MagVerse landing page</p>
							</div>
						</div>
						<div>
							<div>2020</div>
							<div>
								<h1>Personal Project | Snap</h1>
								<p>Challenge from Frontend Mentor</p>
							</div>
						</div>
						<div>
							<div>2019</div>
							<div>
								<h1>Personal Project </h1>
								<p>Facebook Sign in Page</p>
							</div>
						</div>
					</section>
				</div>
				<Socials />
				<Footer />
			</article>{' '}
		</>
	);
};

export default Skills;
