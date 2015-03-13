import React from 'react';
import Sidebar from './Sidebar.jsx';
import { AppState } from '../stores/index.js';

import 'normalize.css/normalize.css';
import '../../styles/app.css';

class MPC extends React.Component {

  constructor(props){
    super(props);
    this.onChange = this.onChange.bind(this);
  }

  componentDidMount() {
    AppState.addChangeListener(this.onChange);
    this.onChange();
  }

  componentWillUnmount() {
    AppState.removeChangeListener(this.onChange);
  }

  onChange(){
    this.props.activePad = AppState.activePad;
    this.forceUpdate();
  }

  render(){
    return (
      <section className='app'>
        <Sidebar />
        <section className='main'>
          <h1>{ this.props.activePad.content }</h1>
        </section>
      </section>
    )
  }
}

MPC.defaultProps = {
  activePad: {
    content: 'click button'
  }
}


export default MPC;
