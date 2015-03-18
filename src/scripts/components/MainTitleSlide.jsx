import React from 'react';
import Actions from '../actions/index.js';
import '../../styles/slide.css';

class Slide extends React.Component {

  closeSidebar(){
    Actions.closeSidebar()
  }

  render(){
    let { title } = this.props.slide;
    return (
      <section className='slide'>
        <header></header>
        <section className="content">
          <h1>{ title }</h1>
        </section>
        <footer>
          <button onClick={ this.closeSidebar }>-</button>
        </footer>
      </section>
    )
  }
}
Slide.propTypes = {
  slide: React.PropTypes.object.isRequired
}


export default Slide;
