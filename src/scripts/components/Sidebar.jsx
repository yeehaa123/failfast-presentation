import React from 'react';
import '../../styles/sidebar.css';
import Actions from '../actions/index.js';
import ControlPanel from './ControlPanel.jsx';
import R from 'ramda';

class Sidebar extends React.Component {

  handleClick(direction){
    Actions.toggleSidebar();
  }

  render(){
    let { isOpen } = this.props;
    let classes = `sidebar ${ !isOpen ? 'closed' : 'open' }`;

    return (
      <section className={ classes }>
        <button onClick={ this.handleClick } class="collapser">
          { isOpen ? '-' : '+' }
        </button>
        <ControlPanel isOpen={ isOpen }/>
      </section>
    )
  }
}

Sidebar.propTypes = {
  isOpen: React.PropTypes.bool
}

export default Sidebar;
