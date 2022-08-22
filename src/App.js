import {
	BrowserRouter as Router,
	// HashRouter,
	Routes,
	Route,
} from 'react-router-dom';
import './App.css';
import './fontawesome-free-6.1.1-web/css/all.css';
import ScrollToTop from './Components/ScrollToTop';
import Firstpage from './Components/Firstpage';
import Home from './Components/Home';
import Certificates from './Components/Certificates';
import Skills from './Components/Skills';
import Sidenav from './Components/Sidenav';
import Contact from './Components/Contact';
import About from './Components/About';
import Projects from './Components/Projects';
import Error from './Components/Error';
import Blur from './Components/Blur';
import Submit from './Components/Submit';
import Screen from './Components/Screen';
import Resume from './Components/Resume';
function App() {
	return (
		<Router>
			<div className="App">
				<ScrollToTop />
				<Blur />
				<Routes>
					<Route path="/" element={<Firstpage />} />
					<Route path="/home" element={<Home />} />
					<Route path="/projects" element={<Projects />} />
					<Route path="/skills" element={<Skills />} />
					<Route path="/certificates" element={<Certificates />} />
					<Route path="/contact" element={<Contact />} />
					<Route path="/submit" element={<Submit />} />
					<Route path="/about" element={<About />} />
					<Route path="/screen" element={<Screen />} />
					<Route path="/resume" element={<Resume />} />
					<Route path="*" element={<Error />} />
				</Routes>
				<Sidenav />
			</div>
		</Router>
	);
}

export default App;
