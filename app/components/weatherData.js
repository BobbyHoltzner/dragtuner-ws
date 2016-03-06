var React = require('react');
var locationHelpers = require('../utils/locationHelpers');

var WeatherData = React.createClass({
  getInitialState(){
    return{
      location: {
        lat: '',
        lon: '',
      },
      elevation: '',
    }
  },
  componentWillMount(){
    locationHelpers.getLocation()
      .then((userLocation) => {
        this.setState({
          location: {
            lat: userLocation.lat,
            lon: userLocation.lon,
          },
        })
      });
  },
  getElevation(){
    locationHelpers.getElevation(this.state.location.lat, this.state.location.lon)
    .then((data))
  },
  render(){
    // console.log(this);
    return(
      <div>
        <div className="location">
          Lat: {this.state.location.lat}<br />
          Lon: {this.state.location.lon}
        </div>
        <div className="elevation">
          <button onClick={this.getElevation} className="btn btn-primary">Get Elevation</button>
          <div>
            Elevation: {this.state.elevation}
          </div>
        </div>
      </div>
    );
  }
});

module.exports = WeatherData;
