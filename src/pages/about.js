import React, { Component } from 'react'
 
class About extends Component {
	render() {
		return (
			<div className="page">
				<h2>About Me</h2>
				<p>
					I am an engineer and mathematics student interested in 
					differential geometry and theoretical machine learning. 
					I'm also interested in the theory and implementation of 
					differentiable programming systems. At Google, I work 
					on <a href="https://cloud.google.com/load-balancing/">
					Cloud Load Balancing</a> infrastructure. 
				</p>
				<p>
					Previously, I studied undergraduate math at the University of Chicago
					and worked at a startup called <a href="http://factr.com">Factr</a>.
				</p>
				<h2>Links</h2>
				<p class="links">
					<a class="link nowrap" href="cv.pdf"><img class="link-icon" src="icons/resume.png" /><span>CV</span></a> &nbsp;&nbsp;
					 &nbsp;&nbsp;&nbsp;&nbsp;
					<a class="link nowrap" href="https://www.github.com/henrysteinitz"><img class="link-icon" src="icons/github.png" /><span>GitHub</span></a> &nbsp;&nbsp;
					 &nbsp;&nbsp;&nbsp;&nbsp;
					<a class="link nowrap" href="https://www.linkedin.com/in/henrysteinitz"><img class="link-icon linkedin" src="icons/linkedin.png" /><span>LinkedIn</span></a>&nbsp;&nbsp;
					 &nbsp;&nbsp;&nbsp;&nbsp;
					<a class="link nowrap" href="https://www.soundcloud.com/phtgrphy"><img id="sc" class="link-icon" src="icons/soundcloud_copyrighted.png" /><span>SoundCloud</span></a>&nbsp;&nbsp;
					 &nbsp;&nbsp;&nbsp;&nbsp;
					<a class="link nowrap" href="https://www.instagram.com/henrysteinitz"><img id="sc" class="link-icon" src="icons/instagram.png" /><span>Instagram</span></a>&nbsp;&nbsp;
					 &nbsp;&nbsp;&nbsp;&nbsp;
						
				</p>
				{ /* <h2>Some Photos</h2> */ }
				
			</div>
		)
	}
}

export default About