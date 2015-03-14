import BaseStore from './BaseStore';
import AppStateConstants from '../constants/AppStateConstants'
import R from 'ramda';
import _ from 'lodash';
import faker from 'faker';

let initialPad = {
  index: 404,
  type: 'image',
  content: 'http://www.mentalutensil.com/wp-content/uploads/2013/11/sg14.jpg'
}

let types = ['text', 'image'];
let imageTypes = ['food', 'city'];

let range = R.range(1,17);
let padsMaker = R.map((index) => {
  let content;
  let type = types[1];
  let imageType = imageTypes[index % 2];
  let imageIndex;
  if(index >= 10){
    imageIndex = index - 10;
  } else {
    imageIndex = index;
  }
  if(type === 'image'){
    content = faker.image[imageType]() + '/' + imageIndex;
  } else {
    content = "HELLO WORLD";
  }
  return { content, type, index };
});


let allPads = padsMaker(range); 
allPads[12] = initialPad;

class AppState extends BaseStore {

  constructor(){
    super();
    this.activePad = allPads[0]; 
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
    }, 3000);
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
