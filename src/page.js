const rightDiv = document.getElementById('right');

const removeAlert = () => {
    document.getElementById('alert').classList.add('display-none');
}

const page = (() => {


    const displayInfo = (obj) => {

        removeAlert();

        //reseting COntent
        rightDiv.innerHTML = '';

        //creating right Div
        const infoDiv = document.createElement('div');


        // Creating Main Display for Temperature and Icon
        const divMainInfo = document.createElement('div');
        divMainInfo.classList.add('temp');

        //Creating Temperature Span
        const spanTemp = document.createElement('span');
        spanTemp.classList.add("temp-number");
        spanTemp.innerText = obj.temp;
        divMainInfo.appendChild(spanTemp);

        //Creating Icon Image Tag
        const weatherIcon = document.createElement('img');
        weatherIcon.classList.add('icon');
        weatherIcon.src = `http://openweathermap.org/img/wn/${obj.icon}.png`;
        divMainInfo.appendChild(weatherIcon);

        // Append MainInfoDiv on the Righ Div
        infoDiv.appendChild(divMainInfo);

        // Creating Div for the Unit Buttons
        const buttonsDiv = document.createElement('div');
        buttonsDiv.classList.add('temp-buttons');

        const celsius = document.createElement('input');
        celsius.type = 'button';
        celsius.value = '°C';
        celsius.id = `celsius-${obj.city}`;
        buttonsDiv.appendChild(celsius);

        const fahrenhiet = document.createElement('input');
        fahrenhiet.type = 'button';
        fahrenhiet.value = '°F';
        fahrenhiet.id = `fahrenhiet-${obj.city}`;
        buttonsDiv.appendChild(fahrenhiet);

        infoDiv.appendChild(buttonsDiv);

        //Creating Header City Name
        const cityName = document.createElement('h3');
        cityName.innerText = obj.name;

        infoDiv.append(cityName);

        //Creating Info Table
        const infoTable = document.createElement('div');
        infoTable.classList.add('info');

        const mainH4 = document.createElement('h4');
        mainH4.innerText = obj.main;
        infoTable.append(mainH4);

        const descriptionH4 = document.createElement('h4');
        descriptionH4.innerText = obj.description;
        infoTable.append(descriptionH4);

        const minTempH4 = document.createElement('h4');
        minTempH4.innerText = `Min Temperature: ${obj.temp_min}`;
        infoTable.append(minTempH4);

        const maxTempH4 = document.createElement('h4');
        maxTempH4.innerText = `Min Temperature: ${obj.temp_max}`;
        infoTable.append(maxTempH4);

        infoDiv.append(infoTable)
        
        rightDiv.appendChild(infoDiv);


    }

    const setAlert = () => {
        document.getElementById('alert').classList.remove('display-none');
    }


    return { displayInfo, setAlert, removeAlert };


})();

export default page;