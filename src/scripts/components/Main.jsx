import React from 'react';
import '../../styles/main.css';
import Timeline from './Timeline.jsx';
import Slides from './Slides.jsx';

class Main extends React.Component {
  render(){
    let { activeSlide, slides, playing } = this.props;
    return (
      <section className='main'>
        <Slides activeSlide={ activeSlide } slides={slides}/>
      </section>
    )
  }
}

Main.propTypes = {
  activeSlide: React.PropTypes.number,
  slides: React.PropTypes.array.isRequired,
  playing: React.PropTypes.bool
};


export default Main;
