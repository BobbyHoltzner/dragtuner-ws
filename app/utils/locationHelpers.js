var axios = require('axios');



var locationHelpers = {
  
  getLocation(){
    var thiss = this;
    if (navigator.geolocation) {
        return new Promise((resolve, reject) => {
          navigator.geolocation.getCurrentPosition((position) => {
            thiss.userLocation = {
              lat: position.coords.latitude,
              lon: position.coords.longitude,
            };
          });
          setTimeout(() => resolve({lat: thiss.userLocation.lat, lon: thiss.userLocation.lon}), 100);
        });
    } else {
        x.innerHTML = "Geolocation is not supported by this browser.";
    }
  },

  getElevation(lat, lon){
    var params = lat+','+lon;
    var key = 'AIzaSyD5yO8b9esVV4_YO45ojzfwQrTRRN6Fx7c';
    console.log(key);
      return axios.get('https://maps.googleapis.com/maps/api/elevation/json?locations=' + params + '&key='+ key)
        .then((data) => {
          console.log(data);
        });
  }

};

module.exports = locationHelpers;
