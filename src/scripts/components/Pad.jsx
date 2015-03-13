import React from 'react';
import Actions from '../actions/index.js';

class Pad extends React.Component {
  constructor(props){
    super(props);
  }
  handleClick(){
    Actions.padPushed(this.props);
  }
  render(){
    return (
      <button className="pad" onClick={ this.handleClick.bind(this) }>
        BUTT-ON
      </button>
    )
  }
}

Pad.defaultProps = {
  id: 9999999
}

Pad.propTypes = {
  id: React.PropTypes.number 
}

export default Pad;
