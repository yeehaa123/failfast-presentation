import React from 'react';
import Sidebar from './Sidebar.jsx';
import { AppState } from '../stores/index.js';

import 'normalize.css/normalize.css';
import '../../styles/app.css';

class MPC extends React.Component {

  render(){
    return (
      <section className='app'>
        <Sidebar />
        <section className='main'>
          <img src={ this.props.activePad.content }/>
        </section>
      </section>
    )
  }
}

MPC.defaultProps = {
  activePad: {
    content: 'http://www.mentalutensil.com/wp-content/uploads/2013/11/sg14.jpg'
  }
}


export default MPC;
