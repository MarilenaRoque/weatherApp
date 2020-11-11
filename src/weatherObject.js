const weatherObj = (data) => {
    const name = `${data.name}, ${data.sys.country}`;
    const description = data.weather[0].description.toUpperCase();
    const icon = data.weather[0].icon;
    const main = data.weather[0].main;
    const temp = data.main.temp;
    const temp_max = data.main.temp_max;
    const temp_min = data.main.temp_min;
    return {
        name,
        description,
        icon,
        main,
        temp,
        temp_max,
        temp_min
    }
}

export default weatherObj