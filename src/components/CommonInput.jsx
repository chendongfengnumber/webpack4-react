import React, { Component } from 'react';
import PropTypes from 'prop-types';

import '../styles/components/commonInput.scss';

const propTypes = {
  onChangeCallback: PropTypes.func,
  inputLeftHint: PropTypes.string.isRequired,
};

const defaultPropTypes = {
  onChangeCallback: null,
  inputLeftHint: '',
};
// TODO input 其他事件回调暂时未暴露
class Input extends Component {
  render() {
    const {
      onChangeCallback,
      inputLeftHint,
    } = this.props;
    return (
      <div className="input_container">
        <div className="input_left_hint" > { inputLeftHint }: </div>
        <input
          id="input_style"
          type="text"
          onChange={onChangeCallback}
        />
      </div>
    );
  }
}


Input.defaultPropTypes = defaultPropTypes;
Input.propTypes = propTypes;
export default Input;
