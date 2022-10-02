const Mode = ({ handleMode, colorScheme }) => {
	return (
		<div className="colorScheme" onClick={handleMode}>
			<i
				className={`fas fa-${
					colorScheme === 'dark' ? 'circle-half-stroke' : 'moon'
				}`}
			></i>
		</div>
	);
};
export default Mode;
