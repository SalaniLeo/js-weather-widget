var input = document.querySelector('#wlinput');
var checkrate = 600000

input.addEventListener("keypress", function(event) {

    if (event.key === "Enter") {
          
        checkWeather();
  
      event.preventDefault();
    }
  })

if(localStorage.getItem("city") != null){
        input.value = localStorage.getItem("city");
        checkWeather();
}

var weatherautocheck = setInterval(function() {

    checkWeather();

},checkrate)

function checkWeather() {

    input = document.querySelector('#wlinput');
    var city = document.querySelector('#name');
    var temp = document.querySelector('#temp');
    var desc = document.querySelector('#desc');
    var clouds = document.querySelector('#clouds');
    var minmaxtemp = document.querySelector('#minmaxtemp');
    var humidity = document.querySelector('#humidity');

    fetch('https://api.openweathermap.org/data/2.5/weather?q='+input.value+'&units=metric&appid=72d251b81d30ef572ae667dfe6c4ee1a')
    .then(response => response.json())
    .then(data => {
      var nameValue = data['name'];
      var tempValue = data['main']['temp'];
      var cloudValue = data['weather'][0]['description'];
      var maxtemp = data["main"]["temp_max"]
      var mintemp = data["main"]["temp_min"]
      var wspeed = data["main"]["humidity"]
      var locationTimezone = data["timezone"]

        const date = new Date();

        utc_time = date.getUTCHours();
        
      times.weathertimezone = locationTimezone/3600+utc_time

        // console.log("location time:", times.weathertimezone)

      localStorage.setItem('city', nameValue);

            city.textContent = nameValue + "";
            desc.textContent = cloudValue + "";
            temp.textContent = "Temp: " + tempValue + "°C";
            minmaxtemp.textContent = mintemp + "°C" + " / " + maxtemp + "°C";
            humidity.textContent = "humidity: " + wspeed + "%";

            checktime()

            if(desc.textContent.includes("broken clouds")){
            
                broken_clouds();

            } else {

                if(desc.textContent.includes("few clouds")){
                    few_clouds();
                
                    
                } else {

                        if(desc.textContent.includes("rain")){
                           
                            rain();
                          
                            
                        } else {

                            if(desc.textContent.includes("clear sky")){
                               
                                no_clouds()
                                

                            } else {

                                if(desc.textContent.includes("overcast clouds")){

                                
                                    overcast_clouds();
                                    setColor();

                                } else {

                                    if(desc.textContent.includes("mist")){
                                        
 
                                        color1 = mist
                                        color2 = cloudy_sky
                                        setColor();

                                    } else {

                                            if(desc.textContent.includes("scattered clouds")){
                                                few_clouds();
                                            
                                                
                                        }

                                    }

                                }

                            }
                        }
                    }    
                }

    var cloudy_sky
    var clear_sky
    var thunderstorm
    var thunders
    var rainy_day 
    var overcastclouds
    var overcastsky
    var mist

    
    function checktime(){

        // console.log(times.weathertimezone)

        if(times.weathertimezone >= 18 || times.weathertimezone < 7){
            // console.log("night")
            set_night()
        } else {
            set_day()
            // console.log("day")
        }
    
    }
    
    
    function set_night(){

        light_color = "#282828"
        
        clear_sky = "#12131E"
        cloudy_sky = "#222328"
        thunderstorm = "#2e2d2d"
        thunders = "#4a3e03"
        rainy_day = "#1c212e"
        overcastclouds = "#212121"
        overcastsky = "#08131f"

       }
    
    function set_day(){

        light_color = "#c9c06b"
    
        clear_sky = "#0388fc"
        cloudy_sky = "#808080"
        thunderstorm = "#474747"
        thunders = "#1a1605"
        rainy_day = "#607794"
        overcast = "#63634f"
        overcastsky = "#5690bf"
        mist = "#72829c"

    }

    function rain(){
    
        color1 = cloudy_sky
        color2 = rainy_day
        setColor();
    
    }
    
    function few_clouds(){

        color1 = clear_sky
        color2 = overcastsky
        setColor();
    
    }
    
    function no_clouds(){
        
        color1 = clear_sky
        color2 = clear_sky
        setColor();
    
    }
    
    function broken_clouds(){
    
        color1 = clear_sky
        color2 = cloudy_sky
        setColor();
    
    }

    function overcast_clouds(){

        color1 = overcastsky
        color2 = cloudy_sky
        setColor();

    }


function setColor(){
            document.getElementById("weather")
            .style.background = "linear-gradient(to left, " 
            + color1
            + ", " 
            + color2
            + ")";

        }
    
    })
    
    
    
//  .catch(err => alert(err));
 .catch(err => console.log(err));
  
    }