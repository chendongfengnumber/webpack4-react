import React, { Component } from 'react';
import { withRouter } from "react-router-dom";
import { PropTypes } from 'prop-types';

import '../styles/HomePage.scss';
import king from '../asset/king.jpg';

const url = 'data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR' +
'0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9Ii0xMS41IC0xMC' +
'4yMzE3NCAyMyAyMC40NjM0OCI+CiAgPHRpdGxlPlJlYWN0IExvZ288L3RpdGx'+
'lPgogIDxjaXJjbGUgY3g9IjAiIGN5PSIwIiByPSIyLjA1IiBmaWxsPSIjNjFk'+
'YWZiIi8+CiAgPGcgc3Ryb2tlPSIjNjFkYWZiIiBzdHJva2Utd2lkdGg9IjEiIG'+
'ZpbGw9Im5vbmUiPgogICAgPGVsbGlwc2Ugcng9IjExIiByeT0iNC4yIi8+CiAg'+
'ICA8ZWxsaXBzZSByeD0iMTEiIHJ5PSI0LjIiIHRyYW5zZm9ybT0icm90YXRlKD'+
'YwKSIvPgogICAgPGVsbGlwc2Ugcng9IjExIiByeT0iNC4yIiB0cmFuc2Zvcm09'+
'InJvdGF0ZSgxMjApIi8+CiAgPC9nPgo8L3N2Zz4K';

const propTypes = {
  history: PropTypes.object.isRequired
}

class HomePage extends Component {

  constructor(props) {
    super(props);

    this.toTestPage = this.toTestPage.bind(this);
  }


  toTestPage() {
    const { history } = this.props;
    history.push('/test');
  }

  render() {
    return(
      <div>
        <div className='title'>hello react</div>
        <div className='imgStyle'>
          <img src={`${url}`} width={100} height={100} />
        </div>
        <div className='imgStyle'>
          <img src={king} width={100} height={100} />
        </div>
        <div onClick={this.toTestPage}>toTestPage</div>
      </div>
    );
  };
}

HomePage.propTypes = propTypes;
export default withRouter(HomePage);
