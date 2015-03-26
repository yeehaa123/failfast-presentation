import React from 'react';
import '../../styles/slide.css';
import Profile from './Profile.jsx';

class CreditsSlide extends React.Component {
  render(){
    console.log('hi');
    let { url, presenter } = this.props.slide;
    return (
      <section className='slide CreditsSlide'>
        <header></header>
        <section className="content">
          <h1>{ url }</h1>
        </section>
        <footer>
          <Profile presenter={ presenter }/>
        </footer>
      </section>
    )
  }
}
CreditsSlide.propTypes = {
  slide: React.PropTypes.object.isRequired
}


export default CreditsSlide;
