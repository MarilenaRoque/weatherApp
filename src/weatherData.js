const APIkey = '4661e46672ff5e9947da7e8a3f45a90a';
const setURL = (location, scale) => { 
    return `http://api.openweathermap.org/data/2.5/weather?q=${location}&appid=${APIkey}&unit=${scale}`
}

const getData = async (location, scale='metric') => {
        const url = setURL(location, scale);
        const request = await fetch(url);    
        if (request.status == 200) {
            const data = await request.json();
            return data;
        } else {
            reject(response.status);
        }
}


export default getData;