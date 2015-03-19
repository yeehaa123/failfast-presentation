import React from 'react';
import Sidebar from './Sidebar.jsx';
import Main from './Main.jsx';
import { AppState } from '../stores/index.js';

import 'normalize.css/normalize.css';
import '../../styles/app.css';

class MPC extends React.Component {
  render(){
    let { playing, slideShow, activeSlide, sidebarOpen } = this.props;
    return (
      <section className='app'>
        <Sidebar isOpen={ sidebarOpen } />
        <Main activeSlide={ activeSlide } playing={ playing } slides={ slideShow.slides }/>
      </section>
    )
  }
}

MPC.propTypes = {
  activeSlide: React.PropTypes.number,
  playing: React.PropTypes.bool,
  slideShow: React.PropTypes.object.isRequired,
  sidebarOpen: React.PropTypes.bool
}


export default MPC;
