import '../../css/paging.css';
import React, { Component } from 'react';
class Paging extends Component {
  constructor(props) {
    super(props);
    this.state = {
      loading: true,
      firstPage: 1,
      lastPage: 1,
      prevPage: 1,
      nextPage: 1,
    };
    this.handlePageChange = this.handlePageChange.bind(this);
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
    console.log(this.page);
    console.log(this.props.totalAmountOfItems);
    console.log(this.props.amountOfItemsOnPage);
    //Total amount of pages
    // console.log(this.props.totalAmountOfItems);
    // console.log(this.props.amountOfItemsOnPage);
    this.amountOfPages = Math.ceil(
      this.props.totalAmountOfItems / this.props.amountOfItemsOnPage,
    );
    console.log(this.amountOfPages);
    this.initConst();
  }

  handlePageChange(event) {
    let name;
    name = event.target.name;
    this.page = Number(name);
    this.initConst();
    this.props.onClick(event);
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

  firstPageSimbol() {
    if (this.state.firstPage !== 1)
      return (
        <li>
          <button onClick={this.handlePageChange} name="1" value="1">
            1
          </button>
        </li>
      );
    else return null;
  }

  firstPoints() {
    if (this.state.firstPage > 2)
      return (
        <li>
          <div>.....</div>
        </li>
      );
    else return null;
  }

  lastPageSimbol() {
    if (this.state.lastPage !== this.amountOfPages)
      return (
        <li>
          <button
            onClick={this.handlePageChange}
            name={this.amountOfPages}
            value={this.amountOfPages}
          >
            {this.amountOfPages}
          </button>
        </li>
      );
    else return null;
  }
  lastPoints() {
    if (this.state.lastPage < this.amountOfPages - 1)
      return (
        <li>
          <div>.....</div>
        </li>
      );
    else return null;
  }

  createBeginPages() {
    let arr = [];
    for (let i = Number(this.state.firstPage); i < Number(this.page); i++) {
      arr.push(i);
    }
    return arr.map((i) => (
      <li key={i}>
        <button onClick={this.handlePageChange} name={i} value={i}>
          {i}
        </button>
      </li>
    ));
  }
  createEndPages() {
    let arr = [];
    for (let i = Number(this.page) + 1; i <= this.state.lastPage; i++) {
      arr.push(i);
    }
    return arr.map((i) => (
      <li key={i}>
        <button onClick={this.handlePageChange} name={i} value={i}>
          {i}
        </button>
      </li>
    ));
  }

  createPrevPage() {
    if (this.page === 1) {
      return (
        <li key="0">
          <button value="prev" name="1" className="wt-prevpage" disabled>
            <i className="lnr lnr-chevron-left" />
          </button>
        </li>
      );
    } else {
      return (
        <li key="0">
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
        <li key="01">
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
        <li key="01">
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
    const firstSimbol = this.firstPageSimbol();
    const lastSimbol = this.lastPageSimbol();
    const firstPointsSimbol = this.firstPoints();
    const lastPointsSimbol = this.lastPoints();
    const beginPages = this.createBeginPages();
    const endPages = this.createEndPages();
    const prevPage = this.createPrevPage();
    const nextPage = this.createNextPage();
    if (this.amountOfPages < 2) return null;
    else {
      return (
        <nav className="wt-pagination">
          <ul>
            {prevPage}
            {firstSimbol}
            {firstPointsSimbol}
            {beginPages}
            <li key={this.page} className="wt-active">
              <button
                onClick={this.handlePageChange}
                name={this.page}
                style={{ color: '#ff0084' }}
              >
                {this.page}
              </button>
            </li>
            {endPages}
            {lastPointsSimbol}
            {lastSimbol}
            {nextPage}
          </ul>
        </nav>
      );
    }
  }
}
export default Paging;
