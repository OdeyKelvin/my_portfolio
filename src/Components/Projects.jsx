import qoreeb from '../images/qoreeb2.jpg';
import dee from '../images/dees-estate.jpg';
import skillers from '../images/skillers.jpg';
import metaverse from '../images/magVerse.jpg';
import snap from '../images/snap.jpg';
import aptlearn from '../images/aptlearn.jpg';
import Project from './Project';
// import { InView } from 'react-intersection-observer';

const Projects = () => {
	return (
		<article className="project">
			<div className="App-bg"></div>
			<h1>Projects Preview</h1>
			<section className="previews-section">
				<Project
					link="https://geekycoder25.github.io/Qoreebullah-Portfolio/"
					img={qoreeb}
					src={'https://github.com/GeekyCoder25/Qoreebullah-Portfolio/'}
					srctext={'here'}
				/>
				<Project
					link="https://geekycoder25.github.io/Dees-Estate"
					img={dee}
					src={'https://github.com/GeekyCoder25/Dees-Estate/'}
					srctext={'here'}
				/>
				<Project
					link="https://geekycoder25.github.io/Skillers/"
					img={skillers}
					src={'https://github.com/GeekyCoder25/Skillers/'}
					srctext={'here'}
				/>
				<Project
					link="https://geekycoder25.github.io/MagVerse/"
					img={metaverse}
					src={'https://github.com/GeekyCoder25/MagVerse/'}
					srctext={'here'}
				/>
				<Project
					link="https://geekycoder25.github.io/Snap/"
					img={snap}
					src={'https://github.com/GeekyCoder25/Snap/'}
					srctext={'here'}
				/>
				<Project
					link="https://geekycoder25.github.io/AptLearn/"
					img={aptlearn}
					src={'https://github.com/GeekyCoder25/AptLearn/'}
					srctext={'here'}
				/>
			</section>
		</article>
	);
};

export default Projects;
