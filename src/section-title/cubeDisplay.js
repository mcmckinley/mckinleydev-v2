import React, { useState, useEffect} from 'react'

import '../section.css'
import './title.css'

import asciiframe from './renderer.js'

function CubeDisplay() {

	const [cubeText, setCubeText] = useState('')

	function callRender () {
		setCubeText(asciiframe());
	}

	useEffect(() => {
		var renderInterval = setInterval(callRender, 33)
		return () => clearInterval(renderInterval)
	}, [cubeText])

	return (
        <div className="Section-right">
            <pre className='Cube'>{cubeText}</pre>
        </div>
	)
}

export default CubeDisplay;
