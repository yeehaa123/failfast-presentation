import React from 'react';
import Pads from './Pads.jsx';
import '../../styles/timeline.css';

class Timeline extends React.Component {
  render(){
    let { activeSlide, playing, slides } = this.props;

    return (
      <section className='timeline'>
        <Pads slides={ slides } activeSlide={ activeSlide } playing={ playing } />
        <section className="modeSwitch"/>
      </section>
    )
  }
}

export default Timeline;
