import React from 'react';
import Pad from './Pad.jsx';
import '../../styles/pads.css';
import R from 'ramda';
import faker from 'faker';

class Pads extends React.Component {
  render(){
    let range = R.range(1,17);
    let padsMaker = R.map((index) => 
        <Pad key={index} id={index} 
             content={ faker.lorem.words(2).join(' ') }/>);
    let pads = padsMaker(range); 
    return (
      <section className="pads">
        { pads }
      </section>
    )
  }
}

export default Pads;
