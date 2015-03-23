import React from 'react';
import Actions from '../actions/index.js';

class Collapser extends React.Component {

  handleClick(direction){
    Actions.toggleSidebar();
  }

  render(){
    let { isOpen } = this.props;
    let classes= 'collapser';

    return (
      <button onClick={ this.handleClick } className={ classes }>
        { isOpen ? '-' : '+' }
      </button>
    )
  }
}

Collapser.propTypes = {
  isOpen: React.PropTypes.bool
}

export default Collapser;
