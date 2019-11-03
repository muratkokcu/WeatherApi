var city = "Orlando";

$.getJSON("http://api.openweathermap.org/data/2.5/weather?q=" + city + "&APPID=8c77eac07ba919ffae4cbf302fc57799&units=metric", 
function(data){
    console.log(data);

    var icon = "http://openweathermap.org/img/w/" + data.weather[0].icon + ".png";
    var temp = Math.floor(data.main.temp);
    var weather = data.weather[0].main;
    var region = data.name;

    $('.icon').attr('src', icon);
    $('.weather').append(weather);
    $('.temp').append(temp);
    $('.region').append(region + ', Weather Forecast');
   
});