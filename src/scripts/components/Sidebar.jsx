import React from 'react';
import Pads from './Pads.jsx';
import '../../styles/sidebar.css';

class Sidebar extends React.Component {
  render(){
    return (
      <section className='sidebar'>
        <Pads />
        <section className="modeSwitch"/>
      </section>
    )
  }
}

export default Sidebar;
