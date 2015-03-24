import React from 'react';
import '../../styles/slide.css';
import Profile from './Profile.jsx';

class MainTitleSlide extends React.Component {

  render(){
    let { title, presenter, event } = this.props.slide;
    let { organizer, date } = event;
    return (
      <section className='slide titleSlide'>
        <header></header>
        <section className="content">
          <h1>{ title }</h1>
          <div className="meta"><h1>{ organizer }, { date }</h1></div>
        </section>
        <footer>
          <Profile presenter={ presenter }/>
        </footer>
      </section>
    )
  }
}
MainTitleSlide.propTypes = {
  slide: React.PropTypes.object.isRequired
}


export default MainTitleSlide;
