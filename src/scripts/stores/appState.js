import BaseStore from './BaseStore';
import AppStateConstants from '../constants/AppStateConstants';
import R from 'ramda';
import slideShowData from '../../content/cth-of-different-cultures.yml';
import createSlideShow from '../utils/createSlideshow';

let slideShow = createSlideShow(slideShowData);

class AppState extends BaseStore {

  constructor(){
    super();
    this.slideShow = slideShow;
    this.activeSlide = 0;
    this.stop = this._stop.bind(this);
    this.play = this._play.bind(this);
    this.playing = undefined;
    //this.play();
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
      this.activeSlide = getRandomInt(1, 24);
      this.update();
    }, 2000);
  }

  transitionSlide(direction){
    let lastSlide = this.slideShow.slides.length;
    if(direction === 'start'){
      this.setActiveSlide(0)
    }
    if(direction === 'forward' && this.activeSlide <= lastSlide){
      this.setActiveSlide(this.activeSlide + 1)
    }
    if(direction === 'back' && this.activeSlide >= 1){
      this.setActiveSlide(this.activeSlide - 1)
    }
    if(direction === 'end'){
      this.setActiveSlide(lastSlide);
    }
  }

  setActiveSlide(padId){
    this.activeSlide = padId;
    this.update();
  }

  update(){
    this.emitChange();
  }

  handleAction({ action }){
    switch(action.actionType) {
      case AppStateConstants.PAD_PUSHED:
        let { padId } = action;
        this.setActiveSlide(padId);
        break;
      case AppStateConstants.TOGGLE_AUTOPLAY:
        this.toggle();
        break;
      case AppStateConstants.TRANSITION_SLIDE:
        let { direction } = action;
        this.transitionSlide(direction);
        break;
      case AppStateConstants.CLOSE_SIDEBAR:
        console.log('yeah');
        break;
    }
    return true;
  }
}

function getRandomInt(min, max) {
    return Math.floor(Math.random() * (max - min)) + min;
}

export default AppState;
