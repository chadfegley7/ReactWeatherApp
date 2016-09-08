var React = require('react');

var ErrorModal = React.createClass({
  getDefaultProps: function(){
    return {
      title: 'Error'
    };
  },
  propTypes: {
    title: React.PropTypes.string,
  },
  componentDidMount: function(){
    var modal = new Foundation.Reveal($('#error-modal'));
    modal.open();
  },
  render: function (){
    var {title} = this.props;

    return (
      <div id="error-modal" className="reveal tiny text-center" data-reveal="">
        <h4>{title}</h4>
        <p>That isn't a real place, silly!</p>
        <p>
          <button className="button hollow" data-close="">
            Okay
          </button>
        </p>
      </div>
    );
  }
});

module.exports = ErrorModal;
