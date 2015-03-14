import React from 'react';
import MPC from './MPC.jsx';
import { AppState } from '../stores/index.js';

class MPCContainer extends React.Component {

  constructor(props){
    super(props);
    let { activePad, allPads, playing } = AppState;
    this.state = { activePad, allPads, playing };
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
    let { activePad, allPads, playing } = AppState;
    this.setState({ activePad, allPads, playing });
  }

  render(){
    let { activePad, allPads, playing } = AppState;
    return (
      <MPC allPads={ allPads } playing={ playing } activePad={ activePad } />
    )
  }
}


export default MPCContainer;
