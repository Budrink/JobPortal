import { Editor } from '@tinymce/tinymce-react';
import React, { Component } from 'react';

class ArticleEditor extends Component {
  handleEditorChange(e) {
    // console.log(e.target.getContent());
  }
  componentDidMount() {
    // Editor.init({
    //   height: '500',
    //   branding: false,
    // });
  }
  render() {
    return (
      <Editor
        ref={(el) => (this.instance = el)}
        apiKey="x2xozbtfey42t4lcaye4ms8od8r08od4y97asp1ab5i933hs"
        selector="textarea"
        branding="false"
        init={{
          branding: false,
          //   plugins: ['lists link image paste help wordcount'],
          //   selector: 'textarea',
          //  theme: 'advanced',
          plugins: 'autoresize print preview',
          width: '100%',
          height: 400,
          toolbar: false,
          menubar: false,
          statusbar: false,

          //     'undo redo | formatselect | bold italic | alignleft aligncenter alignright alignjustify | bullist numlist outdent indent | help',
          // }}
          // config={{
          //   plugins: 'autolink link image lists print preview',
          //   toolbar: 'undo redo | bold italic | alignleft aligncenter alignright',
        }}
        onChange={this.handleEditorChange}
        value={this.props.content}
        height="500"
      />
    );
  }
}

export default ArticleEditor;
