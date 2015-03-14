import React from 'react';
import Sidebar from './Sidebar.jsx';
import { AppState } from '../stores/index.js';

import 'normalize.css/normalize.css';
import '../../styles/app.css';

class MPC extends React.Component {

  render(){
    let { activePad } = this.props;
    console.log(activePad);
    return (
      <section className='app'>
        <Sidebar />
        <section className='main'>
        { activePad.type === 'image' && <img src={ activePad.content }/>}
        { activePad.type === 'text' && <h1>{ activePad.content }</h1>}
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
