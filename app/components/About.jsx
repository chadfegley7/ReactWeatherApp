var React = require('react');
var {Link} = require('react-router');

var About = (props) => {
  return(
    <div>
      <h3 className="text-center">About</h3>
      <p>This is my first React Web App which is a weather app. I learned all about webpacks, stateless functionial components, arrow functions and so much more. There's more to come in the future to make this app better the more I learn.<br /><br /> Here's a link to the github repository if you would like to take a look at my code:</p>
      <ul>
        <li>
          <a href="https://github.com/chadfegley7/ReactWeatherApp">Github Code</a>
        </li>
      </ul>
      <p>Here are some of the tools that I used to create this app:</p>
      <ul>
        <li>
          <a href="https://facebook.github.io/react">React</a> - This was the JavaScript framework used.
        </li>
        <li>
          <a href="http://openweathermap.org/">Open Weather Map API</a> - Where to retrieve my weather information.
        </li>
      </ul>
    </div>
  )
};

module.exports = About;
