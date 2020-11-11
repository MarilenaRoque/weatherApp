// Factor function process the data and return obj with just the useful info

const weatherObj = (data, scale) => {
    const name = `${data.name}, ${data.sys.country}`;
    const city = data.name;
    const description = data.weather[0].description.toUpperCase();
    const icon = data.weather[0].icon;
    const main = data.weather[0].main;
    let unit='';
    if (scale == 'metric') { 
        unit = '°C';
    } else {
        unit ='°F';
    }
    const temp = `${data.main.temp} ${unit}`;
    const temp_max = `${data.main.temp_max} ${unit}`;
    const temp_min = `${data.main.temp_min} ${unit}`;
    return {
        name,
        city,
        description,
        icon,
        main,
        temp,
        temp_max,
        temp_min
    }
}

export default weatherObj