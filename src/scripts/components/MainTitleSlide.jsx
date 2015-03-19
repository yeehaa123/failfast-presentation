import React from 'react';
import Actions from '../actions/index.js';
import '../../styles/slide.css';

class MainTitleSlide extends React.Component {

  toggleSidebar(){
    Actions.toggleSidebar()
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
        </footer>
      </section>
    )
  }
}
MainTitleSlide.propTypes = {
  slide: React.PropTypes.object.isRequired
}


export default MainTitleSlide;
