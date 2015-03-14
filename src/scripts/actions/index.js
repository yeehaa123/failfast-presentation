import AppDispatcher from '../dispatcher/AppDispatcher';
import AppStateConstants from '../constants/AppStateConstants'

let Actions = {
  padPushed(pad){
    AppDispatcher.handleViewAction({
      actionType: AppStateConstants.PAD_PUSHED,
      pad: pad
    });
  },
  toggleAutoPlay(){
    AppDispatcher.handleViewAction({
      actionType: AppStateConstants.TOGGLE_AUTOPLAY,
    });
  }
};

export default Actions;

