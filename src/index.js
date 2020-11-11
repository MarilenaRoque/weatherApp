import './stylesheets/style.css';
import dataSubmit from './weatherData';


// Adding Event Listeners
document.addEventListener('click', (e) => {
    if (e.target && e.target.id === 'search-btn') {
      dataSubmit();
    }
});