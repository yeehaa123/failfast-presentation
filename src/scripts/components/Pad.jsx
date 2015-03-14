import React from 'react';
import Actions from '../actions/index.js';
import '../../styles/pad.css';
class Pad extends React.Component {
  constructor(props){
    super(props);
  }
  handleClick(){
    Actions.padPushed(this.props);
  }
  render(){
    let { isActive, id } = this.props;
    let classes;
    if(isActive){
      classes = ['pad', 'active'].join(' ');
    } else {
      classes = ['pad'].join(' ');
    }
    return (
      <button className={ classes } onClick={ this.handleClick.bind(this) }>
        { id }
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
