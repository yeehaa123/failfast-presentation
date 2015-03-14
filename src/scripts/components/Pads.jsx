import React from 'react';
import R from 'ramda';
import Pad from './Pad.jsx';
import Actions from '../actions/index.js';
import '../../styles/pads.css';

class Pads extends React.Component {

  handleClick(){
    Actions.toggleAutoPlay();
  }

  render(){
    let { allPads, activePad, playing } = this.props;
    console.log(playing);
    let createPads = R.map(({ index, type, content}) => {
      let isActive = index === activePad.index;
      return <Pad isActive={ isActive } key={ index } type={ type } id={ index } content={ content }/>
    })
    let pads = createPads(allPads); 
    return (
      <section className="pads">
        { pads }
        <button className={ playing ? 'active' : null } onClick={ this.handleClick }>Autoplay</button>
      </section>
    )
  }
}

export default Pads;
