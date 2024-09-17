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
				<img src={github} alt='github' />
				<img src={linkedin} alt='linkedin' />
				<img src={spotify} alt='spotify'/>
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
