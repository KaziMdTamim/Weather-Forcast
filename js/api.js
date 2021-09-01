const weatherData = () => {
    const weatherInput = document.getElementById("search-field")
    const weatherResult = weatherInput.value;
    weatherInput.value =""

    fetch(`https://api.openweathermap.org/data/2.5/weather?q=${weatherResult}&appid=1b96f4beec8979efcd342d00861cf97a`)
    .then(res => res.json())
    .then(data => weatherSection(data))

    }

    const toggleSpinner = displayStyle => {
        document.getElementById("spinners").style.display = displayStyle;
    }
    
function weatherSection(tempareture){
        const weatherField = document.getElementById("weather-section");
        weatherField.textContent ="";
        toggleSpinner("block")
                const div = document.createElement("div");
                toggleSpinner("none")
             div.innerHTML = `
              <h1>${tempareture.name}</h1>
             <h3><span>${(tempareture.main["temp"]- 273).toFixed(2)}</span>&deg;C</h3>
             <h1 class="lead">${tempareture.weather[0].main}</h1>
                 `
                 toggleSpinner("none")
                 const weatherValue = tempareture.weather[0].main;
            const weatherIcon = document.getElementById('weather-icon')
            weatherIcon.textContent = '';
            toggleSpinner("none")
            const div2 = document.createElement('div');
            toggleSpinner("none")
            if(weatherValue == "Clear"){
                div2.innerHTML = `
                <img src="images/clear-removebg-preview.png" alt=""> 
                `
            }
            else if(weatherValue == "Haze"){
                div2.innerHTML = `
                <img src="images/Haze.png" alt=""> 
                `
            }
            else if(weatherValue == "Clouds"){
                div2.innerHTML = `
                <img src="images/cloudy.png" alt="">
                `
            }
            else if(weatherValue == "Rain"){
                div2.innerHTML = `
                <img src="images/rainy-removebg-preview.png" alt="">
                `
            }
            else if(weatherValue == "Mist"){
                div2.innerHTML = `
                <img src="images/mist.jpg" alt="">
                `
            }
            else if(weatherValue == "Smoke"){
                div2.innerHTML = `
                <img src="images/smoke.png" alt="">
                `
            }
            toggleSpinner("none")
       
               weatherField.appendChild(div);
               toggleSpinner("none")
               weatherField.appendChild(div2);
               toggleSpinner("none")
            //    weatherField.appendChild(div3);
         
            
    }
