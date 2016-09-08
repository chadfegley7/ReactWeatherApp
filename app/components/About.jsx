var React = require('react');
var {Link} = require('react-router');

var About = (props) => {
  return(
    <div>
      <h3 className="text-center">About</h3>
      <p>This is my first React Web App. I learned all about webpacks, stateless functionial components, arrow functions and so much more. There's more to come in the future to make this app better the more I learn.<br /><br /> Here's a link to the github repository if you would like to take a look at my code:</p>
      <ul>
        <li>
          <a href="https://github.com/chadfegley7">Github Code</a>
        </li>
      </ul>
      <p>Also, to retrieve the weather information I am using Open Weather Map API located here:</p>
      <ul>
        <li>
          <a href="http://openweathermap.org/">Open Weather Map API</a>
        </li>
      </ul>
    </div>
  )
};

module.exports = About;
