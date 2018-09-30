//@flow
import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import {
  EditorState,
  convertToRaw,
  ContentState,
  convertFromRaw
} from 'draft-js';
import { Editor } from 'react-draft-wysiwyg';
import draftToHtml from 'draftjs-to-html';
import htmlToDraft from 'html-to-draftjs';
import '../../../node_modules/react-draft-wysiwyg/dist/react-draft-wysiwyg.css';

type Props = {
  inputType: 'json' | 'html',
  contentHtmlString?: string,
  contentJson?: JSON,
  onSave: (output: string | JSON) => void
};

type State = {
  editorState: Object
};

class RTEditor extends Component<Props, State> {
  state = {
    editorState: EditorState.createEmpty()
  };

  onEditorStateChange: Function = editorState => {
    this.setState({
      editorState
    });
  };

  getContentFromProps(props: Props) {
    const { contentHtmlString, contentJson, inputType } = props;
    let editorState;
    if (inputType === 'html' && contentHtmlString) {
      const contentBlock = htmlToDraft(contentHtmlString);
      if (contentBlock) {
        const contentState = ContentState.createFromBlockArray(
          contentBlock.contentBlocks
        );
        editorState = EditorState.createWithContent(contentState);
      }
    } else if (inputType === 'json' && contentJson) {
      editorState = EditorState.createWithContent(convertFromRaw(contentJson));
    } else {
      console.warn('Input type and input content is missing or does not match');
    }
    if (editorState) {
      this.setState({ editorState });
    }
    return editorState;
  }

  componentDidMount() {
    this.getContentFromProps(this.props);
  }

  handleSave() {
    const { inputType, onSave } = this.props;
    const { editorState } = this.state;
    if (inputType === 'html') {
      onSave(draftToHtml(convertToRaw(editorState.getCurrentContent())));
    } else if (inputType === 'json') {
      onSave(JSON.stringify(editorState, null, 4));
    }
  }

  render() {
    const { editorState } = this.state;
    return (
      <Editor
        editorState={editorState}
        wrapperClassName="demo-wrapper"
        editorClassName="demo-editor"
        onEditorStateChange={this.onEditorStateChange}
        onBlur={this.handleSave.bind(this)}
      />
    );
  }
}
export default RTEditor;
