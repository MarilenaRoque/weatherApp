const APIkey = '4661e46672ff5e9947da7e8a3f45a90a';
const setURL = location => { 
    return `http://api.openweathermap.org/data/2.5/weather?q=${location}&appid=${APIkey}`
}

const getData = async location => {
        const url = setURL(location);
        const request = await fetch(url);
        const data = await request.json();
        console.log(data);
}

export default getData;