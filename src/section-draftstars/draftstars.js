import '../section.css'
import '../section-title/title.css'
import './draftstars.css'

import previewImage from './draftstars-portfolioproject.png'

// import { useState, useEffect } from 'react'

function DraftStars () {

	return (
		<div className="Section">
			<div className="Section-left">
				<h1 class="Name-text">Draft Stars</h1>
				<p>AI Powered, Self Hosted, Full Stack<br />Draft Engine for Brawl Stars</p>
                <p><em>Not currently available for public use. Contact me for exclusive access.</em></p>
                <p>Check it out on GitHub</p>
			</div>

			<div className="Section-right">
                <img src={previewImage} alt='Draft Stars Preview'></img>
			</div>
		</div>
	)
}

export default DraftStars;
