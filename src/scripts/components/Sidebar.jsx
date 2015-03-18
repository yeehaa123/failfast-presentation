import React from 'react';
import '../../styles/sidebar.css';
import Actions from '../actions/index.js';
import DirectionButton from './DirectionButton.jsx';
import R from 'ramda';


class Sidebar extends React.Component {

  handleClick(direction){
    Actions.transitionSlide(direction);
  }

  render(){
    let directions = [ 'start', 'back', 'forward', 'end' ];
    let createButtons = R.map((direction) => (
      <DirectionButton key={ direction } direction={ direction }/>
    ));
    let buttons = createButtons(directions);

    return (
      <section className='sidebar'>
        <section className="controlPanel">
          { buttons }
        </section>
      </section>
    )
  }
}

export default Sidebar;
