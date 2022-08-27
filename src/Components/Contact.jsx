import { useState } from 'react';
import message from '../images/message.jpg';
import phone from '../images/phone.png';
import qrcode from '../images/qrcode.png';
import Footer from './Footer';
import Navbar from './Navbar';
import Socials from './Socials';

const Contact = () => {
	const [namevalid, setNamevalid] = useState('');
	const [emailvalid, setEmailvalid] = useState('');
	const [messagevalid, setMessagevalid] = useState('');
	const nameInvalid = e => {
		e.preventDefault();
		e.target.value === ''
			? setNamevalid(
					<>
						<i className="fa-solid fa-circle-exclamation"></i>
						<span> Please input your name</span>
					</>
			  )
			: setNamevalid(true);
	};
	const emailInvalid = e => {
		e.preventDefault();
		e.target.value.length < 6 ||
		!e.target.value.includes('@') ||
		!e.target.value.includes('.')
			? setEmailvalid(
					<>
						<i className="fa-solid fa-circle-exclamation"></i>
						<span> Please input a valid email</span>
					</>
			  )
			: setEmailvalid(true);
	};
	const messageInvalid = e => {
		e.preventDefault();
		e.target.value === ''
			? setMessagevalid(
					<>
						<i className="fa-solid fa-circle-exclamation"></i>
						<span> Please input a message</span>
					</>
			  )
			: setMessagevalid(true);
	};
	return (
		<>
			<Navbar />
			<article className="contact">
				<h1>Take a Coffe & Chat with me</h1>
				<div className="button">
					<a href="mailto:toyibe25@gmail.com">
						<img src={message} alt="email" />
						toyibe25@gmail.com
					</a>

					<a href="https://wa.link/acx3ha" target="_blank" rel="noreferrer">
						<img src={phone} alt="phone" />
						(+234) 907 - 300 - 2599
					</a>
				</div>
				<form action="https://formsubmit.co/toyibe25@gmail.com" method="POST">
					<input
						type="hidden"
						name="_next"
						value="https://toyib.vercel.app/submit"
					/>
					<input
						type="hidden"
						name="_subject"
						value="Portfolio-latest Form Submit"
					/>
					<input type="hidden" name="_captcha" value="false" />
					<div className="inputerrorcontainer">
						<input
							type="text"
							name="name"
							id="name"
							placeholder="Name"
							required
							onInvalid={nameInvalid}
							onBlur={nameInvalid}
						/>
						{<p className="formvalid">{namevalid}</p>}
					</div>
					<div className="inputerrorcontainer">
						<input
							type="email"
							name="email"
							id="email"
							placeholder="Email Address"
							required
							onInvalid={emailInvalid}
							onBlur={emailInvalid}
						/>
						{<p className="formvalid">{emailvalid}</p>}
					</div>
					<div>
						<select name="subject" id="subject" defaultValue={'subject'}>
							<option value="subject" disabled>
								Subject (optional)
							</option>
							<option value="frontend">Frontend Developer</option>
							<option value="backend">Backend Developer</option>
							<option value="fullstack">Fullstack Developer</option>
							<option value="ux/ui">UX/UI Designer</option>
							<option value="product">Product Designer</option>
							<option value="writer">Technical Writer</option>
							<option value="other">Others</option>
						</select>
					</div>
					<div className='textarea'>
						<textarea
							name="message"
							id="message"
							cols="30"
							rows="5"
							placeholder="Your mesasage here..."
							required
							onInvalid={messageInvalid}
							onBlur={messageInvalid}
						></textarea>
						{<p className="formvalid messagevalid">{messagevalid}</p>}
					</div>
					<input type="submit" value="SEND MESSAGE" />
				</form>
				<section className="contact-social-links">
					<div>Contact me on my social links</div>
					<a
						href="https://geekycoder25.github.io/Portfolio/"
						target="_blank"
						rel="noreferrer"
					>
						<i className="fab fa-github"></i>
						Github
					</a>
					<a
						href="https://www.linkedin.com/in/toyib-lawal/"
						target="_blank"
						rel="noreferrer"
					>
						<i className="fab fa-linkedin"></i>
						Linkedin
					</a>
					<a
						href="https://twitter.com/_GeekyCoder_"
						target="_blank"
						rel="noreferrer"
					>
						<i className="fab fa-twitter"></i>
						Twitter
					</a>
					<a
						href="https://facebook.com/lawal.toyyib.7"
						target="_blank"
						rel="noreferrer"
					>
						<i className="fab fa-facebook"></i>
						Facebook
					</a>
				</section>
				<section className="qrcode">
					<a href="https://wa.link/acx3ha" target="_blank" rel="noreferrer">
						<img src={qrcode} alt="qrcode" />
					</a>
				</section>
				<Socials />
				<Footer />
			</article>
		</>
	);
};

export default Contact;
