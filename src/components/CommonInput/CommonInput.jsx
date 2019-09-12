import React, { Component } from 'react';
import PropTypes from 'prop-types';

import './commonInput.scss';

const propTypes = {
  onChangeCallback: PropTypes.func,
  inputLeftHint: PropTypes.string,
};

const defaultProps = {
  onChangeCallback: null,
  inputLeftHint: '',
};
// TODO input 其他事件回调暂时未暴露
class Input extends Component {
  constructor(props) {
    super(props);
    this.state = {
      inputValue: '',
    };
  }
  render() {
    const {
      onChangeCallback,
      inputLeftHint,
    } = this.props;
    return (
      <div className="input_container">
        { inputLeftHint ? <div className="input_left_hint" > { inputLeftHint }: </div> : null }
        <input
          id="input_style"
          type="text"
          onChange={event => onChangeCallback(event.target.value)}
        />
      </div>
    );
  }
}


Input.defaultProps = defaultProps;
Input.propTypes = propTypes;
export default Input;
