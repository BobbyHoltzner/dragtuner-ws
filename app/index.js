var React = require('react');
var ReactDOM = require('react-dom');
var WeatherData = require('./components/weatherData');


var WeatherStation = React.createClass({
  render(){
    return(
      <div className="container">
        <h1>Weather Station</h1>
        <WeatherData />
      </div>
    );
  }
});

ReactDOM.render(
  <WeatherStation />,
  document.getElementById('app')
);
