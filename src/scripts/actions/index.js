import AppDispatcher from '../dispatcher/AppDispatcher';
import AppStateConstants from '../constants/AppStateConstants'

let Actions = {
  closeSidebar(){
    AppDispatcher.handleViewAction({
      actionType: AppStateConstants.CLOSE_SIDEBAR
    });
  },
  transitionSlide(direction){
    AppDispatcher.handleViewAction({
      actionType: AppStateConstants.TRANSITION_SLIDE,
      direction: direction
    });
  },
  padPushed(padId){
    AppDispatcher.handleViewAction({
      actionType: AppStateConstants.PAD_PUSHED,
      padId: padId
    });
  },
  toggleAutoPlay(){
    AppDispatcher.handleViewAction({
      actionType: AppStateConstants.TOGGLE_AUTOPLAY,
    });
  }
};

export default Actions;

