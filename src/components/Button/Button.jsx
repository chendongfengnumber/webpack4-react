import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Classnames from 'classnames';

import './button.scss';

const propTypes = {
  content: PropTypes.string.isRequired, // 按钮的文字内容
  type: PropTypes.string.isRequired, // 按钮类型
  size: PropTypes.string.isRequired, // 按钮尺寸
  disabled: PropTypes.bool.isRequired, // 是否禁用
};

class Button extends Component {
  render() {
    const { content, type } = this.props;
    return (
      <div className={Classnames({ primary: type === 'primary' })}>
        <button className="reset_button">
          { content }
        </button>
      </div>

    );
  }
}
Button.propTypes = propTypes;
export default Button;
