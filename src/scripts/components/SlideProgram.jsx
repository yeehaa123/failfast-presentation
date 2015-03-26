import React from 'react';
import '../../styles/slideContent.css';
import R from 'ramda';

class SlideProgram extends React.Component {

  render(){
    let { content } = this.props;
    let createProgramList = R.mapIndexed((item, index) => (
      <div key={ index }><h1>{ item }</h1></div>)
    );
    let program= createProgramList(content);

    return (
      <section className="program">
        { program }
      </section>
    )
  }
}

SlideProgram.propTypes = {
  content: React.PropTypes.array.isRequired
};


export default SlideProgram;
