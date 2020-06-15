var myUrl = "https://api.aerisapi.com/observations/zip?client_id=bztqTzogbfkse9jYTOTi7&client_secret=25AvdRwi0aGuFcasRG1wNXIXCZCsiXuut9PqKge9";
var myZip = document.getElementById('zip');

function getWeather(myZip) {
  var newUrl = myUrl.replace("zip", myZip);
  jQuery(document).ready(function ($) {
    $.ajax({
      url: newUrl,
      dataType: "jsonp",
      success: function (json) {
        if (json.success == true) {
          var ob = json.response.ob;
          var temp = ob.tempF;
          var desc = ob.weather;
          var city = json.response.place.name;
          $('#weather').html(desc + ", " + temp + "&#8457 <br>" + city);

          if (temp < 40) {
            $('#message').html("It's too cold for a hoodie, maybe you should wear a coat...");
          } else if (temp > 68) {
            $('#message').html("It's too hot to wear a hoodie today :-(");
          }
          else {
            $('#message').html("It's the perfect day to wear a hoodie! :-)");
          }
        }
        else {
          alert('An error occurred: ' + json.error.description);
        }
      }
    });
  });
}
