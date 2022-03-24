import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { convertToRaw, convertFromRaw, EditorState, Editor } from 'draft-js';
import { convertToHTML, convertFromHTML } from 'draft-convert';
import './styles.css';

class Escribir extends Component {
  constructor(props) {
    super(props);
    
    this.state = {
      editorState: EditorState.createEmpty(),
    }
  }

  onChange = (editorState) => {
    this.setState({
      editorState,
    });
  }

  exportHTML = () => {
    this.setState({ convertedContent: convertToHTML(this.state.editorState.getCurrentContent()) });
  }

  updateHTML = (e) => {
    e.preventDefault();
    this.setState({ convertedContent: e.target.value });
  }

  importHTML = () => {
    const { editorState } = this.state;
    this.onChange(EditorState.push(editorState, convertFromHTML(this.state.convertedContent)));
  }

  render() {
    return (
      <div className="main">
        <Editor
          editorState={this.state.editorState}
          onChange={this.onChange}
        />
        <div className="flex">
          <div>
            <button onClick={this.exportHTML}>Export HTML</button>
            <button onClick={this.importHTML}>Import HTML</button>
          </div>
          HTML:
          <textarea onChange={this.updateHTML} value={this.state.convertedContent} />
        </div>
      </div>
    );
  }
}

export default Escribir;
