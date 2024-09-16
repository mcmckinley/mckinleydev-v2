import '../section.css'
import './title.css'

import './cube.js'

import github from './github.svg'
import linkedin from './linkedin.svg'
import spotify from './spotify.svg'


import { useState, useEffect } from 'react'
import asciiframe from './cube.js'

function Title () {

	const [cubeText, setCubeText] = useState('')

	function callRender () {
		setCubeText(asciiframe());
	}

	useEffect(() => {
		var renderInterval = setInterval(callRender, 100)

		return () => clearInterval(renderInterval)
	}, [cubeText])

	function IconRow () {
		return (
			<div className='icon-row'>
				<img src={github} alt='github' />
				<img src={linkedin} alt='linkedin' />
				<img src={spotify} alt='spotify'/>
			</div>
		)
	}

	return (
		<div className="Section">
			<div className="Section-left">
				<h1 class="Name-text">Michael<br></br>McKinley</h1>
				<p>Welcome to my portfolio</p>
				<IconRow />
			</div>

			<div className="Section-right">
				<pre className='Cube'>{cubeText}</pre>
			</div>
		</div>
	)
}

export default Title;
