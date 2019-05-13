import React, { Component } from 'react';
import { withRouter, Link } from "react-router-dom";
import { PropTypes } from 'prop-types';

const propTypes = {
  history: PropTypes.object.isRequired
}

class HomePage extends Component {

  constructor(props) {
    super(props);

    this.toTestPage = this.toTestPage.bind(this);
  }


  toTestPage() {
    console.log('this.props', this);
    const { history } = this.props;
    console.log('this.props', this.props);
    history.push('/test');
    // history.go();
    console.log('3');
  }

  render() {
    return(
      <div>
        <div>hello react</div>
        <Link to="/test">Home</Link>
        <div onClick={this.toTestPage}>点击去测试页面</div>
      </div>
    );
  };
}

HomePage.propTypes = propTypes;
export default withRouter(HomePage);
