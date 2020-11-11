// Factor function process the data and return obj with just the useful info

const weatherObj = (data, scale) => {
  const name = `${data.name}, ${data.sys.country}`;
  const city = data.name;
  const description = data.weather[0].description.toUpperCase();
  const { icon } = data.weather[0];
  const { main } = data.weather[0];
  let unit = '';
  if (scale === 'metric') {
    unit = '°C';
  } else {
    unit = '°F';
  }
  const temp = `${data.main.temp} ${unit}`;
  const tempMax = `${data.main.temp_max} ${unit}`;
  const tempMin = `${data.main.temp_min} ${unit}`;
  return {
    name,
    city,
    description,
    icon,
    main,
    temp,
    tempMax,
    tempMin,
  };
};

export default weatherObj;