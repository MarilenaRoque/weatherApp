import weatherObj from './weatherObject';
import page from './page';

const APIkey = '4661e46672ff5e9947da7e8a3f45a90a';
const setURL = (location, scale) => { 
    return `http://api.openweathermap.org/data/2.5/weather?q=${location}&appid=${APIkey}&units=${scale}`
}

const getData = async (location, scale) => {
        const url = setURL(location, scale);
        const request = await fetch(url);    
        if (request.status == 200) {
            const data = await request.json();
            const obj = weatherObj(data);
            console.log(obj);
            page.displayInfo(obj);
            return obj;
        } else {
            reject(response);
        }
}

let dataSubmit = (city= null, scale = 'metric') => {
    if (city===null) {
        city = document.getElementById('city').value;
        getData(city, scale);
    }
};


export default dataSubmit;