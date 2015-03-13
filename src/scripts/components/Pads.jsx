import React from 'react';
import Pad from './Pad.jsx';
import '../../styles/pads.css';
import R from 'ramda';

class Pads extends React.Component {
  render(){
    let range = R.range(3,4);
    let padsMaker = R.mapIndexed((content, index) => 
        <Pad key={index} id={index} content={content}/>);
    let pads = padsMaker(range); 
    return (
      <section className="pads">
        { pads }
      </section>
    )
  }
}

export default Pads;
