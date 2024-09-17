import '../section.css'
import './title.css'

import CubeDisplay from './cubeDisplay.js'

import github from './github.svg'
import linkedin from './linkedin.svg'
import spotify from './spotify.svg'


function Title () {

	function IconRow () {
		return (
			<div className='icon-row'>
				<a href="https://github.com/mcmckinley" className="icon-link"><img src={github} alt='github' /></a>
				<a href="https://www.linkedin.com/in/michael-mckinley-891ba0270/" className="icon-link"><img src={linkedin} alt='linkedin' /></a>
				<a href="https://open.spotify.com/artist/4OqQWgNWGAZI55LECmJA5B?si=af_y_zVHRTqakamjndNvfA" className="icon-link"><img src={spotify} alt='spotify'/></a>
			</div>
		)
	}
	function EmailLink () {
		return (
			<p className="email-link">mxmckinley@gmail.com</p>
		)
	}

	return (
		<div className="Section">
			<div className="Section-left">
				<h1 class="Name-text">Michael McKinley</h1>
				<p>A gallery of my personal projects</p>
				<IconRow />
				<EmailLink />

			</div>

			<CubeDisplay />
		</div>
	)
}

export default Title;
