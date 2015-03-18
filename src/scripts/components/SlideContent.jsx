import React from 'react';
import marked from 'marked';
import '../../styles/slideContent.css';

class SlideContent extends React.Component {
  render(){
    let { content } = this.props;
    let renderedContent = {__html: marked(content)};
    return (
      <section className="content" 
               dangerouslySetInnerHTML={ renderedContent }>
      </section>
    )
  }
}
SlideContent.propTypes = {
  content: React.PropTypes.string.isRequired
}


export default SlideContent;
