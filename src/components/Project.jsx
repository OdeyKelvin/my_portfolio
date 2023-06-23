const Project = props => {
	return (
		<div className='previews-grid'>
			<a href={props.link}>
				<img src={props.img} alt='logo' className='previews-logo' />
			</a>
			<p>
				
				<br />
				Click on image to display preview
			</p>
		</div>
	);
};

export default Project;
