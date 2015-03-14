import BaseStore from './BaseStore';
import AppStateConstants from '../constants/AppStateConstants';
import { allPads } from '../utils/fixtures';

class AppState extends BaseStore {

  constructor(){
    super();
    this.activePad = allPads[12]; 
    this.allPads = allPads;
    this.stop = this._stop.bind(this);
    this.play = this._play.bind(this);
    this.playing = undefined;
    this.play();
    this.toggle = this._toggle.bind(this);
  }

  _toggle(){
    !this.playing ? this.play() : this.stop();
    this.update();
  }

  _stop(intervalId){
    clearInterval(this.playing);
    this.playing = undefined;
  }

  _play(){
    this.playing = setInterval(()=> {
      this.activePad = _.sample(allPads); 
      this.update();
    }, 2000);
  }

  setActivePad(pad){
    this.activePad = pad;
    this.update();
  }

  update(){
    this.emitChange();
  }

  handleAction({ action }){
    switch(action.actionType) {
      case AppStateConstants.PAD_PUSHED:
        let { pad } = action;
        this.setActivePad(pad);
        break;
      case AppStateConstants.TOGGLE_AUTOPLAY:
        this.toggle();
        break;
    }
    return true;
  }
}

export default AppState;
