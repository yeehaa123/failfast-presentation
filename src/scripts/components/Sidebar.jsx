import React from 'react';
import '../../styles/sidebar.css';
import ControlPanel from './ControlPanel.jsx';
import Collapser from './Collapser.jsx';

class Sidebar extends React.Component {

  render(){
    let { isOpen, side } = this.props;
    let classes = `sidebar ${ side === 'right' || !isOpen ? 'closed' : 'open' }`;

    return (
      <section className={ classes }>
        { side === 'left' && <ControlPanel isOpen={ isOpen }/> }
        <Collapser isOpen={ isOpen }/>
      </section>
    )
  }
}

Sidebar.propTypes = {
  isOpen: React.PropTypes.bool,
  side: React.PropTypes.string
}

export default Sidebar;
