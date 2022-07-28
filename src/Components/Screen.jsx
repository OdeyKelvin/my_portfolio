export default function Screen() {
	const width = window.screen.width;
	const height = window.screen.height;
	return (
		<div className="screen">
			<div className="App-bg"></div>
			{`Your screen width is ${width} and height is ${height}`}
		</div>
	);
}
