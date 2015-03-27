import React from 'react';
import MPC from './MPC.jsx';
import key from 'keymaster';
import { AppState } from '../stores/index.js';
import Actions from '../actions/index.js';

class MPCContainer extends React.Component {

  constructor(props){
    super(props);
    let { activePad, allPads, playing, slideShow, activeSlide, sidebarOpen } = AppState;
    this.state = { activePad, allPads, playing, slideShow, activeSlide, sidebarOpen };
    this.onChange = this.onChange.bind(this);
  }

  transitionSlide(direction){
    Actions.transitionSlide(direction);
  }

  componentDidMount() {
    key('up', this.transitionSlide.bind(this, 'start'));
    key('down', this.transitionSlide.bind(this, 'end'));
    key('right', this.transitionSlide.bind(this, 'forward'));
    key('left', this.transitionSlide.bind(this, 'back'));
    AppState.addChangeListener(this.onChange);
    this.onChange();
  }

  componentWillUnmount() {
    AppState.removeChangeListener(this.onChange);
  }

  onChange(){
    let { activePad, allPads, playing, slideShow, activeSlide, sidebarOpen } = AppState;
    this.setState({ activePad, allPads, playing, slideShow, activeSlide, sidebarOpen });
  }

  render(){
    let { activePad, allPads, playing, slideShow, activeSlide, sidebarOpen } = this.state;
    return (
      <MPC sidebarOpen={ sidebarOpen } slideShow={ slideShow } allPads={ allPads } playing={ !!playing } activeSlide={ activeSlide } activePad={ activePad } />
    )
  }
}


export default MPCContainer;
