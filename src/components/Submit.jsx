import { Link } from 'react-router-dom';

const Submit = () => {
	return (
		<section className="submit">
			<div className="App-bg"></div>
			<h1>
				Thanks for reaching out to me, your information has been sent, I'll get
				get back to you soon 🤗
			</h1>
			<div>
				<Link to="/">Back to home</Link>
			</div>
		</section>
	);
};

export default Submit;
