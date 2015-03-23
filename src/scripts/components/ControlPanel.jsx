import React from 'react';
import Actions from '../actions/index.js';
import DirectionButton from './DirectionButton.jsx';
import R from 'ramda';

class ControlPanel extends React.Component {

  handleClick(direction){
    Actions.toggleSidebar();
  }

  render(){
    let { isOpen } = this.props;
    let directions = [ 'start', 'back', 'forward', 'end' ];
    let createButtons = R.map((direction) => (
      <DirectionButton key={ direction } direction={ direction }/>
    ));
    let buttons = createButtons(directions);
    let classes = `controlPanel ${ !isOpen ? 'closed' : 'open' }`;

    return (
      <section className={ classes }>
        { buttons }
      </section>
    )
  }
}

ControlPanel.propTypes = {
  isOpen: React.PropTypes.bool
}

export default ControlPanel;
