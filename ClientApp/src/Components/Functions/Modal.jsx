import React from 'react';
import ReactDOM from 'react-dom';
export default class Modal extends React.PureComponent {
  constructor(props) {
    super(props);
    this.state = { win: null, el: null };
    // this.hendleClose = this.hendleClose.bind(this);
  }

  componentDidMount() {
    let win = window.open('', '', 'width=600,height=400,left=200,top=200');
    win.document.title = '';
    let el = document.createElement('div');
    win.document.body.appendChild(el);
    this.setState({ win, el });

    // win.onbeforeunload = this.hendleClose;
  }
  handleSomething(event) {
    event.preventdefault();
    this.state.win.close();
  }
  componentWillUnmount() {
    this.state.win.close();
  }

  render() {
    const { el } = this.state;
    if (!el) {
      return null;
    }
    return ReactDOM.createPortal(this.props.children, el);
  }
}
