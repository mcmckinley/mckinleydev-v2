import './App.css';

import Title from './section-title/title.js'
import DraftStars from './section-draftstars/draftstars.js';
import DigitsQuiz from './section-digits/digits.js';

import React, { useEffect } from 'react'

import updateFavicon from './utils/favicon.js';

function App() {
  // Automatically update the theme based on the user's setting
  useEffect(() => {
    const userPrefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
    console.log(userPrefersDark)
    console.log('use effect active')
    updateFavicon(userPrefersDark);
  }, []);

  return (
    <div className="App">
      <Title />
      <DraftStars />
      <DigitsQuiz />
    </div>
  );
}

export default App;
