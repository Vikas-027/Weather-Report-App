const apiKey="7d1539cc32376105c507d1bcf31ea0db";
const apiUrl="https://api.openweathermap.org/data/2.5/weather?&units=metric&q=";
const searchBox=document.querySelector(".search input");
const searchBtn=document.querySelector(".search button");
const weatherIcon=document.querySelector(".weather-icon");

let p=document.getElementById("date");
p.innerHTML=Date();

async function checkWeather(city){
    const response=await fetch(apiUrl+city+`&appid=${apiKey}`);
    if(response.status==404){
        alert("Enter a valid city name")
        document.querySelector(".error").style.display="block";
        document.querySelector(".weather").style.display="none";
    }
    else{
        var data=await response.json();

        document.querySelector(".city").innerHTML=data.name;
        document.querySelector(".temp").innerHTML=Math.round(data.main.temp) + "°c";
        document.querySelector(".humidity").innerHTML=data.main.humidity+ "%";
        document.querySelector(".wind").innerHTML=data.wind.speed+ "km/ph";

        if (data.weather[0].main=="Clouds"){
            weatherIcon.src="images/clouds.png"
        }

        if (data.weather[0].main=="Clear"){
            weatherIcon.src="images/clear.png"
        }

        if (data.weather[0].main=="Rain"){
            weatherIcon.src="images/rain.png"
        }

        if (data.weather[0].main=="Drizzle"){
            weatherIcon.src="images/drizzle.png"
        }

        if (data.weather[0].main=="Mist"){
            weatherIcon.src="images/mist.png";
        }
        document.querySelector(".weather").style.display="block";
        document.querySelector(".error").style.display="none";
        }
    
}

searchBtn.addEventListener("click",()=>{
    checkWeather(searchBox.value);
});
