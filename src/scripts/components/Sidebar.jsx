import React from 'react';
import '../../styles/sidebar.css';
import ControlPanel from './ControlPanel.jsx';
import Collapser from './Collapser.jsx';

class Sidebar extends React.Component {

  render(){
    let { isOpen } = this.props;
    let classes = `sidebar ${ !isOpen ? 'closed' : 'open' }`;

    return (
      <section className={ classes }>
        <ControlPanel isOpen={ isOpen }/>
        <Collapser isOpen={ isOpen }/>
      </section>
    )
  }
}

Sidebar.propTypes = {
  isOpen: React.PropTypes.bool
}

export default Sidebar;
