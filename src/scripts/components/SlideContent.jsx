import React from 'react';
import marked from 'marked';
import '../../styles/slideContent.css';

let renderer = new marked.Renderer();

renderer.listitem = (text) => {
  let output = `<li><p>${ text }</p></li>`;
  return output;
}

class SlideContent extends React.Component {
  render(){
    let { content } = this.props;
    let renderedContent = {__html: marked(content, { renderer })};
    return (
      <section className="slideContent" 
               dangerouslySetInnerHTML={ renderedContent }>
      </section>
    )
  }
}
SlideContent.propTypes = {
  content: React.PropTypes.string.isRequired
}


export default SlideContent;
