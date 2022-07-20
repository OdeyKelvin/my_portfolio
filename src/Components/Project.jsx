const Project = (props) => {
	return (
		<div className="previews-grid">
			<a href={props.link}>
				<img src={props.img} alt="logo" className="previews-logo" />
			</a>
                <p>
                    Source Code <a href={props.src} target="_blank" rel="noreferrer">{props.srctext}</a><br />
                    Click on image to display preview
                </p>
		</div>
	);
};

export default Project;
