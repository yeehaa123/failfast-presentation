import React from 'react';
import Pad from './Pad.jsx';
import '../../styles/pads.css';
import R from 'ramda';
import faker from 'faker';

let types = ['text', 'image'];

let range = R.range(1,17);
let padsMaker = R.map((index) => {
  let content;
  let type = types[index % 2];
  if(type === 'image'){
    content = faker.image.food() + '/' + index;
  } else {
    content = "HELLO WORLD";
  }
  return <Pad key={ index } type={ type } id={ index } content={ content }/>
});

let pads = padsMaker(range); 

class Pads extends React.Component {
  render(){
    return (
      <section className="pads">
        { pads }
      </section>
    )
  }
}

export default Pads;
