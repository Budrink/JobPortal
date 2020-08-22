import '../../css/paging.css';
import React, { Component } from 'react';
class Paging2 extends Component {
  constructor(props) {
    super(props);
    this.state = {
      loading: true,
      firstPage: 1,
      lastPage: 1,
      prevPage: 1,
      nextPage: 1,
    };

    this.handleArrowClick = this.handleArrowClick.bind(this);
  }
  // the const which are used to create the paging depending of current page
  linkName;
  amountOfPages;
  page;

  initConst() {
    let firstPage;
    let lastPage;
    let prevPage;
    let nextPage;
    this.linkName = '/' + this.props.linkName + '?page=';
    if (Number(this.page) <= 3) {
      firstPage = 1;
    } else {
      firstPage = Number(this.page) - 2;
    }

    if (Number(this.page) >= Number(this.amountOfPages) - 2) {
      lastPage = Number(this.amountOfPages);
      firstPage = Number(this.amountOfPages) - 4;
    } else {
      lastPage = Number(firstPage) + 4;
    }

    if (Number(this.page) === 1) {
      prevPage = 1;
    } else {
      prevPage = Number(this.page) - 1;
    }

    if (Number(this.page) === Number(this.amountOfPages)) {
      nextPage = this.amountOfPages;
    } else {
      nextPage = Number(this.page) + 1;
    }

    if (firstPage < 1) {
      firstPage = 1;
    }
    if (prevPage < 1) {
      prevPage = 1;
    }

    if (nextPage > Number(this.amountOfPages)) {
      nextPage = Number(this.amountOfPages);
    }
    if (lastPage > Number(this.amountOfPages)) {
      lastPage = Number(this.amountOfPages);
    }

    this.setState({ firstPage: firstPage }, () => {
      this.setState({ lastPage: lastPage }, () => {
        this.setState({ prevPage: prevPage }, () => {
          this.setState({ nextPage: nextPage });
        });
      });
    });
    this.render();
  }
  componentDidMount() {
    this.page = Number(this.props.pageNumber);
    //Total amount of pages
    this.amountOfPages = Math.ceil(
      this.props.totalAmountOfItems / this.props.amountOfItemsOnPage,
    );
    this.initConst();
    // this.setState({loading:false});
  }

  handleArrowClick(event, value) {
    switch (value) {
      case 'prev':
        if (this.page !== 1) {
          this.page = Number(this.page) - 1;
        }
        break;
      case 'next':
        if (this.page !== this.amountOfPages) {
          this.page = Number(this.page) + 1;
        }
        break;
      default:
        break;
    }
    this.initConst();
    this.props.onClick(event);
  }

  createPrevPage() {
    if (this.page === 1) {
      return (
        <li key="0" style={{ float: 'left' }}>
          <button value="prev" name="1" className="wt-prevpage" disabled>
            <i className="lnr lnr-chevron-left" />
          </button>
        </li>
      );
    } else {
      return (
        <li key="0" style={{ float: 'left' }}>
          <button
            onClick={(e) => this.handleArrowClick(e, 'prev')}
            value="prev"
            name="1"
            className="wt-prevpage"
          >
            <i className="lnr lnr-chevron-left" />
          </button>
        </li>
      );
    }
  }
  createNextPage() {
    if (this.page === this.state.lastPage)
      return (
        <li key="01" style={{ float: 'right' }}>
          >
          <button
            value="next"
            name={this.amountOfPages}
            className="wt-nextpage"
            disabled
          >
            <i className="lnr lnr-chevron-right" />
          </button>
        </li>
      );
    else
      return (
        <li key="01" style={{ float: 'right' }}>
          <button
            onClick={(e) => this.handleArrowClick(e, 'next')}
            className="wt-nextpage"
          >
            <i className="lnr lnr-chevron-right" />
          </button>
        </li>
      );
  }
  render() {
    const prevPage = this.createPrevPage();
    const nextPage = this.createNextPage();
    if (this.amountOfPages < 2)
      return (
        <nav className="wt-pagination">
          <ul>{this.props.InternalContent}</ul>
        </nav>
      );
    else {
      return (
        <nav className="wt-pagination">
          <ul>
            {prevPage}
            {this.props.InternalContent}
            {nextPage}
          </ul>
        </nav>
      );
    }
  }
}
export default Paging2;
