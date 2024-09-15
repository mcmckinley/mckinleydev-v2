import '../section.css'
import './title.css'

import './cube.js'
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

	return (
		<div className="Section">
			<div className="Section-left">
				<h1>Michael<br></br>McKinley</h1>
				<p>Welcome to my portfolio</p>
			</div>

			<div className="Section-right">
				<pre className='Cube'>{cubeText}</pre>
			</div>
		</div>
	)
}

export default Title;
