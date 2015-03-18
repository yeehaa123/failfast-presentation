import React from 'react';
import Actions from '../actions/index.js';

class DirectionButton extends React.Component {

  handleClick(direction){
    Actions.transitionSlide(direction);
  }

  render(){
    let { direction } = this.props;
    let buttonTexts = {
      'start': '<<',
      'back': '<',
      'forward': '>',
      'end': '>>'
    };
    let text = buttonTexts[direction];
    return (
      <button className={ direction } 
        onClick={ this.handleClick.bind(this, direction) }>
        { text }
      </button>
    )
  }
}

DirectionButton.propTypes = {
  direction: React.PropTypes.string.isRequired
};

export default DirectionButton;
