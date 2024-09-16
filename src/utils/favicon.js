import darkModeFavicon from './favicon-dark.png'
import lightModeFavicon from './favicon-light.png'

export const updateFavicon = (darkMode) => {
    const favicon = document.getElementById('favicon');

    if (darkMode) {
        favicon.href = darkModeFavicon;
        console.log('updating favicon to dark')
    } else {
        favicon.href = lightModeFavicon;
        console.log('updating favicon to light')
    }
}

// updateFavicon();

export default updateFavicon;