import React from 'react';
import Sidebar from './Sidebar.jsx';
import Main from './Main.jsx';
import { AppState } from '../stores/index.js';

import 'normalize.css/normalize.css';
import '../../styles/app.css';

class MPC extends React.Component {

  render(){
    let { activePad, allPads, playing } = this.props;
    return (
      <section className='app'>
        <Sidebar activePad={ activePad } playing={ playing } allPads={ allPads }/>
        <Main activePad={ activePad }/>
      </section>
    )
  }
}


export default MPC;
