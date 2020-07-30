import { Editor } from '@tinymce/tinymce-react';
import React, { Component } from 'react';
class MessageEditor extends Component {
  constructor(props) {
    super(props);

    this.state = { content: '' };
    this.handleEditorChange = this.handleEditorChange.bind(this);
  }
  handleEditorChange(content, editor) {
    this.setState({ content });
  }
  render() {
    return (
      <Editor
        apiKey="x2xozbtfey42t4lcaye4ms8od8r08od4y97asp1ab5i933hs"
        // init={{ plugins: 'link table' }}
        init={{
          branding: false,
          // selector: 'textarea#myTextArea',
          // selector: 'textarea#reply',
          textareaName: 'reply',
          plugins: ['lists link image paste help wordcount'],
          selector: 'textarea',
          height: '100%',
          toolbar:
            'undo redo | formatselect | bold italic | alignleft aligncenter alignright alignjustify | bullist numlist outdent indent | help',
        }}
        value={this.props.content}
        onEditorChange={this.props.handleEditorChange}
      />
    );
  }
}

export default MessageEditor;
