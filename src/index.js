import './stylesheets/style.css';
import dataSubmit from './weatherData';


// Adding Event Listeners
document.addEventListener('click', (e) => {
    if (e.target && e.target.id === 'search-btn') {
      dataSubmit();
    } else if (e.target && e.target.id.includes('fahrenhiet')) {
        const buttonInfo = e.target.id.split('-');
        dataSubmit(buttonInfo[1], 'imperial');
    }
});