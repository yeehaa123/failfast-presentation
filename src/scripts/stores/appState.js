import BaseStore from './BaseStore';
import AppStateConstants from '../constants/AppStateConstants'

class AppState extends BaseStore {

  constructor(){
    this.activePad = undefined;
    super();
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
    }
    return true;
  }
}


export default AppState;
