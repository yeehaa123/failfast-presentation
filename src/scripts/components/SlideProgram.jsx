import React from 'react';
import '../../styles/slideContent.css';
import R from 'ramda';

class SlideProgram extends React.Component {

  render(){
    let { content } = this.props;
    let createProgramList = R.mapIndexed((item, index) => (
      <li key={ index }><p>{ item }</p></li>)
    );
    let program= createProgramList(content);

    return (
      <section className="slideContent program">
        <ul>
          { program }
        </ul>
      </section>
    )
  }
}

SlideProgram.propTypes = {
  content: React.PropTypes.array.isRequired
};


export default SlideProgram;
