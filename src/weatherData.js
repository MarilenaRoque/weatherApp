import weatherObj from './weatherObject';
import page from './page';

const APIkey = '4661e46672ff5e9947da7e8a3f45a90a';
const setURL = (location, scale) => `https://api.openweathermap.org/data/2.5/weather?q=${location}&appid=${APIkey}&units=${scale}`;

const getData = async (location, scale) => {
  const url = setURL(location, scale);
  const request = await fetch(url, {mode: 'cors'});
  if (request.status === 200) {
    const data = await request.json();
    const obj = weatherObj(data, scale);
    page.displayInfo(obj);
    return obj;
  }
  throw Error(404);
};

const dataSubmit = (city = null, scale = 'metric') => {
  if (city === null) {
    city = document.getElementById('city').value;
  }
  const obj = getData(city, scale);
  obj.catch(() => {
    page.setAlert();
    return null;
  });
};


export default dataSubmit;