import React from 'react';
import Pads from './Pads.jsx';
import '../../styles/sidebar.css';

class Sidebar extends React.Component {
  render(){
    let { activePad, allPads, playing } = this.props;

    return (
      <section className='sidebar'>
        <Pads activePad={ activePad } playing={ playing } allPads={ allPads }/>
        <section className="modeSwitch"/>
      </section>
    )
  }
}

export default Sidebar;
