import React, { Component } from 'react';

class TestPage extends Component {
  constructor(props) {
    super(props);
    this.test = this.test.bind(this);
  }
  render() {
    return (
      <div>
        <div> welcome testPage </div>
      </div>
    );
  }
}

export default TestPage;
