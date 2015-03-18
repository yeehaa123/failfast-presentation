import React from 'react';
import '../../styles/slide.css';

class SectionTitleSlide extends React.Component {
  render(){
    let { title, sectionIndex } = this.props.slide;
    let classes = `titleSlide section${ sectionIndex }`;
    return (
      <section className={ classes }>
        <h1>{ title }</h1>
      </section>
    )
  }
}
SectionTitleSlide.propTypes = {
  slide: React.PropTypes.object.isRequired
}


export default SectionTitleSlide;
