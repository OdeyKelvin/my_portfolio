import qoreeb from '../images/qoreeb2.jpg';
import dee from '../images/dees-estate.jpg';
import skillers from '../images/skillers.jpg';
import metaverse from '../images/magVerse.jpg';
import snap from '../images/snap.jpg';
import aptlearn from '../images/aptlearn.jpg';
import Project from './Project';
// import { InView } from 'react-intersection-observer';

const Projects = () => {
	const handleGoLeft = () => {
		const previews = document.querySelector('.previews-section');
		previews.scrollBy(-2000, 0);
	};
	const handleGoRight = () => {
		const previews = document.querySelector('.previews-section');
		previews.scrollBy(1000, 0);
	};
	return (
		<article className='project'>
			<div className='App-bg'></div>
			<h1>Projects Preview</h1>
			<section className='previews-section'>
				<Project
					link='https://qoreeb.vercel.app/'
					img={qoreeb}
					src={'https://github.com/GeekyCoder25/Qoreebullah-Portfolio/'}
				/>
				<Project
					link='https://geekycoder25.github.io/Dees-Estate'
					img={dee}
					src={'https://github.com/GeekyCoder25/Dees-Estate/'}
				/>
				<Project
					link='https://geekycoder25.github.io/Skillers/'
					img={skillers}
					src={'https://github.com/GeekyCoder25/Skillers/'}
				/>
				<Project
					link='https://geekycoder25.github.io/MagVerse/'
					img={metaverse}
					src={'https://github.com/GeekyCoder25/MagVerse/'}
				/>
				<Project
					link='https://geekycoder25.github.io/Snap/'
					img={snap}
					src={'https://github.com/GeekyCoder25/Snap/'}
				/>
				<Project
					link='https://geekycoder25.github.io/AptLearn/'
					img={aptlearn}
					src={'https://github.com/GeekyCoder25/AptLearn/'}
				/>
				<div
					className='projects-angles projects-angles-left'
					onClick={handleGoLeft}
				>
					<i className='fas fa-angles-left'></i>
				</div>
				<div
					className='projects-angles projects-angles-right'
					onClick={handleGoRight}
				>
					<i className='fas fa-angles-right'></i>
				</div>
			</section>
		</article>
	);
};

export default Projects;
