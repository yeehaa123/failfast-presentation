import React from 'react';
import MainTitleSlide from './MainTitleSlide.jsx';
import SectionTitleSlide from './SectionTitleSlide.jsx';
import Slide from './Slide.jsx';
import '../../styles/slides.css';
import R from 'ramda';
import LogoText from './LogoText.jsx';

class Main extends React.Component {
  selectType(data){
    let slide;
    switch(data.type){
      case 'main-title': 
        slide = <MainTitleSlide slide={data}/>
        break;
      case 'section-title': 
        slide = <SectionTitleSlide slide={data}/>
        break;
      default:
        slide = <Slide slide={data}/>
    }
    return slide;
  }

  render(){
    let { activeSlide, slides } = this.props;
    let slideData = R.find(R.propEq('index', activeSlide))(slides); 
    let slide = slideData ? this.selectType(slideData) : null;
    return (
      <section className={ 'slides' }>
        { slide ? slide : <LogoText />}
      </section>
    );

  }
}

Main.propTypes = {
  slides: React.PropTypes.array.isRequired,
  activeSlide: React.PropTypes.number.isRequired,
};


export default Main;
