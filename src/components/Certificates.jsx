import htmlcerti from '../images/certificates/HTML_certificate.jpg';
import csscerti from '../images/certificates/CSS_certificate.jpg';
import jscerti from '../images/certificates/JavaScript_certificate.jpg';
import reactcerti from '../images/certificates/react_certificate.jpg';
import jquerycerti from '../images/certificates/jQuery_certificate.jpg';
import responsiveWebcerti from '../images/certificates/Responsive-Web-Design_certificate.jpg';
import webDevcerti from '../images/certificates/web-dev-basics_certificate.jpg';
import marketerscerti from '../images/certificates/marketers.jpg';
import nodecerti from '../images/certificates/node.jpg';

const Certificates = () => {
	return (
		<article>
			<h1 className="certificates-header">My Certificates</h1>
			<section className="certificates-section">
				<a href={htmlcerti}>
					<div className="grid">
						<img src={htmlcerti} alt="html" />
					</div>
				</a>
				<a href={csscerti}>
					<div className="grid">
						<img src={csscerti} alt="html" />
					</div>
				</a>
				<a href={jscerti}>
					<div className="grid">
						<img src={jscerti} alt="html" />
					</div>
				</a>
				<a href={reactcerti}>
					<div className="grid">
						<img src={reactcerti} alt="react" />
					</div>
				</a>
				<a href={jquerycerti}>
					<div className="grid">
						<img src={jquerycerti} alt="Jquery" />
					</div>
				</a>
				<a href={responsiveWebcerti}>
					<div className="grid">
						<img
							src={responsiveWebcerti}
							alt="Responsive-Web-Design_certificate"
						/>
					</div>
				</a>
				<a href={webDevcerti}>
					<div className="grid">
						<img src={webDevcerti} alt="web-dev-basics_certificate" />
					</div>
				</a>
				<a href={webDevcerti}>
					<div className="grid">
						<img src={marketerscerti} alt="web-dev-basics_certificate" />
					</div>
				</a>
				<a href={webDevcerti}>
					<div className="grid">
						<img src={nodecerti} alt="web-dev-basics_certificate" />
					</div>
				</a>
				<div className="grid">
					<h1>Still counting...</h1>
				</div>
			</section>
		</article>
	);
};

export default Certificates;
