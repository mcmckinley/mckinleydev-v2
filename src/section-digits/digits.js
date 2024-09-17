import '../section.css'
import '../section-title/title.css'
import './digits.css'

import previewImage from './digits-preview.jpeg'

// import { useState, useEffect } from 'react'

function DigitsQuiz () {

	return (
		<div className="Section">
			<div className="Section-left">
				<h1 class="Name-text">Digits Quiz</h1>
				<p>iOS app that tests the user's knowledge of their contact's phone numbers. Available on the App Store.</p>
				<a href="https://apps.apple.com/us/app/digits-quiz/id6477763016"
				  className="external-link">
					iOS App store
				</a>
                <a href="https://github.com/mcmckinley/Digits"
					className="external-link"
				>
					Check it out on GitHub
				</a>
			</div>

			<div className="Section-right">
                <img className="Digits-preview" src={previewImage} alt='Draft Stars Preview'></img>
			</div>
		</div>
	)
}

export default DigitsQuiz;
