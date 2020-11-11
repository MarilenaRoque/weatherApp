import weatherObj from './weatherObject';

const APIkey = '4661e46672ff5e9947da7e8a3f45a90a';
const setURL = (location, scale) => { 
    return `http://api.openweathermap.org/data/2.5/weather?q=${location}&appid=${APIkey}&units=${scale}`
}

const getData = async (location, scale='metric') => {
        const url = setURL(location, scale);
        console.log(url)
        const request = await fetch(url);    
        if (request.status == 200) {
            const data = await request.json();
            const obj = weatherObj(data);
            return obj;
        } else {
            reject(response);
        }
}


export default getData;