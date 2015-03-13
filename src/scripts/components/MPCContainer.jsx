import React from 'react';
import MPC from './MPC.jsx';
import { AppState } from '../stores/index.js';


class MPCContainer extends React.Component {

  constructor(props){
    super(props);
    let { activePad } = AppState;
    this.state = { activePad };
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
    let { activePad } = AppState;
    this.setState({ activePad });
  }

  render(){
    let activePad = AppState.activePad;
    return (
      <MPC activePad={ activePad } />
    )
  }
}


export default MPCContainer;
