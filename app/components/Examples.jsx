var React = require('react');
var {Link} = require('react-router');

var Examples = (props) => {
 return(
   <div>
     <h1 className="text-center">Examples</h1>
     <p>Here are a few locations to try out!</p>
     <ol>
       <li>
        <Link to='/?location=SanJose'>San Jose, CA</Link>
       </li>
       <li>
        <Link to="/?location=Rio">Rio de Janeiro</Link>
       </li>
     </ol>
   </div>
 )
}
module.exports = Examples;
