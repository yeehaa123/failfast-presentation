import React from 'react';
import '../../styles/slide.css';
import SlideLabel from './SlideLabel.jsx';
import SlideContent from './SlideContent.jsx';
import SlideProgram from './SlideProgram.jsx';

class Slide extends React.Component {
  render(){
    let { type, content, sectionTitle, title } = this.props.slide;
    return (
      <section className='slide'>
        <header>
          { type === 'normal' && <SlideLabel title={ title || sectionTitle }/> }
          { type === 'program' && <SlideLabel title={ 'Program' }/> }
        </header>
        { type === 'normal' && <SlideContent content={ content }/> }
        { type === 'program' && <SlideProgram content={ content }/> }
      </section>
    )
  }
}
Slide.propTypes = {
  title: React.PropTypes.string,
  content: React.PropTypes.string,
}


export default Slide;
