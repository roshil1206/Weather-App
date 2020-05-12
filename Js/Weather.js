const queryString = window.location.search;
const urlParams = new URLSearchParams(queryString);
const cityname = urlParams.get('cityname');
const baseurl='https://api.openweathermap.org/data/2.5/weather?q=';
const apikey = '&units=metric&appid=a7b6d1502eba4b6d5812f3dc24315a0f';
const callURL = baseurl+cityname+apikey;
const button_CEL = document. querySelector('#C')
const button_FER = document. querySelector('#F')
let temp = "";
let description = "";
fetch(callURL)
.then((res)=>res.json())
.then((data)=>{
    temp = data.main.temp;
    description = data.weather[0].description;
    description=description[0].toUpperCase()+description.slice(1);
    
    document.getElementById('temperature').innerHTML=Math.round(temp)+"°C";
    document.getElementById('city').innerHTML=cityname;
    document.getElementById('description').innerHTML=description;
    
})
celcius();

button_CEL.addEventListener('click',celcius);
button_FER.addEventListener('click',fahrenheit);
function celcius()  {
    button_FER.disabled = false;
    button_CEL. disabled = true;
    button_CEL.className = 'btn f-20 fcgrey';
    button_FER.className = 'btn f-20 fc-yell';
    document.getElementById('temperature').innerHTML=Math.round(temp)+"°C";
}

function fahrenheit()  {

    button_CEL.disabled = false;
    button_FER. disabled = true;
    button_FER.className = 'btn f-20 fcgrey';
    button_CEL.className = 'btn f-20 fc-yell';
    let temper = temp;
    temper=temper*(9/5)+32;
    document.getElementById('temperature').innerHTML=Math.round(temper)+"°F";
}
