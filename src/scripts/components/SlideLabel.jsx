import React from 'react';

class SlideLabel extends React.Component {
  render(){
    let { title } = this.props;
    return (
      <hgroup className="label">
        <h1>{ title }</h1>
      </hgroup>
    )
  }
}
SlideLabel.propTypes = {
  title: React.PropTypes.string.isRequired
}


export default SlideLabel;
