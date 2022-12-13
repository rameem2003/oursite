const weather = document.getElementById("temp");


window.onload = () => {
    if(navigator.geolocation){
        navigator.geolocation.getCurrentPosition(onSuccess, onError);
    }else{
        alert("This Browser Not Support Geolocation");
    }
}

const onSuccess = (position) => {
    console.log(position);

    const {latitude, longitude} = position.coords;

    fetch(`https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&appid=eda1ef54ac6b95c3b2e8d2ef681e6569&units=metric`).then(responce => responce.json()).then(data => {
        console.log(data);

        let cityName = data.name;
        let temp = data.main.temp;
        

        weather.innerHTML = `|| ${Math.round(temp)}°C, ${cityName.replace("District", "")}`

    })
}

const onError = (error) => {
    console.log(error.massage);
}