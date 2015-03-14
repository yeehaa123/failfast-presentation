import React from 'react';
import '../../styles/main.css';

class Main extends React.Component {
  render(){
    let { activePad } = this.props;
    return (
      <section className='main'>
        { activePad.type === 'image' && <img src={ activePad.content }/>}
        { activePad.type === 'text' && <h1>{ activePad.content }</h1>}
      </section>
    )
  }
}

export default Main;
