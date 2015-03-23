import React from 'react';
import '../../styles/slide.css';

class SectionTitleSlide extends React.Component {
  render(){
    let { title, sectionIndex } = this.props.slide;
    let classes = `titleSlide slide section${ sectionIndex }`;
    return (
      <section className={ classes }>
        <section className="content">
          <h1>{ title }</h1>
        </section>
      </section>
    )
  }
}
SectionTitleSlide.propTypes = {
  slide: React.PropTypes.object.isRequired
}


export default SectionTitleSlide;
