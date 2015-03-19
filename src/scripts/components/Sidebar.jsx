import React from 'react';
import '../../styles/sidebar.css';
import Actions from '../actions/index.js';
import DirectionButton from './DirectionButton.jsx';
import R from 'ramda';

class Sidebar extends React.Component {

  handleClick(direction){
    Actions.transitionSlide(direction);
  }

  toggleSidebar(){
    Actions.toggleSidebar();
  }

  render(){
    let { isOpen } = this.props;
    let directions = [ 'start', 'back', 'forward', 'end' ];
    let createButtons = R.map((direction) => (
      <DirectionButton key={ direction } direction={ direction }/>
    ));
    let buttons = createButtons(directions);
    let classes = `sidebar ${ !isOpen ? 'closed' : 'open' }`;

    return (
      <section className={ classes }>
        <section className="controlPanel">
          { buttons }
        </section>
      </section>
    )
  }
}

Sidebar.propTypes = {
  isOpen: React.PropTypes.bool
}

export default Sidebar;
