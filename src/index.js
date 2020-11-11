import './stylesheets/style.css';
import dataSubmit from './weatherData';


// Testings!
console.log("I am working perfect splendid!");
//const data = getData('London');
// Testing!

// Adding Event Listeners
document.addEventListener('click', (e) => {
    if (e.target && e.target.id === 'search-btn') {
      dataSubmit();
    }
});