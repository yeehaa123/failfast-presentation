import React from 'react';
import '../../styles/slide.css';
import SlideLabel from './SlideLabel.jsx';
import SlideContent from './SlideContent.jsx';

class Slide extends React.Component {
  closeSidebar(){
    console.log('oops');
  }
  render(){
    let { type, content, sectionTitle } = this.props.slide;
    return (
      <section className='slide'>
        <header>
          { type === 'normal' && <SlideLabel title={ sectionTitle }/> }
        </header>
        { content && <SlideContent content={ content }/> }
        <footer>
          <button onClick={ this.closeSidebar }>+</button>
        </footer>
      </section>
    )
  }
}
Slide.propTypes = {
  title: React.PropTypes.string,
  content: React.PropTypes.string,
}


export default Slide;
