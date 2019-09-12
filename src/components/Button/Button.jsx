import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Classnames from 'classnames';

import './button.scss';

const propTypes = {
  content: PropTypes.string.isRequired, // 按钮的文字内容
  type: PropTypes.string.isRequired, // 按钮类型 primary/
  size: PropTypes.string.isRequired, // 按钮尺寸 large/normal/small/mini
  disabled: PropTypes.bool.isRequired, // 是否禁用
  onClick: PropTypes.func, // 点击回调函数
};

const defaultProps = {
  onClick: null,
};

class Button extends Component {

  constructor(props) {
    super(props);

    this.submit = this.submit.bind(this);
  }

  submit() {
    const { onClick } = this.props;
    if (onClick) {
      onClick();
    }
  }
  render() {
    const { content, type, size, disabled } = this.props;
    const classnames = [
      'reset_button',
      { primary: type === 'primary' },
      { large: size === 'large' },
    ];

    return (
      <div className="reset_container">
        <button
          className={Classnames(classnames)}
          onClick={this.submit}
          disabled={disabled}
        >
          { content }
        </button>
      </div>
    );
  }
}

Button.defaultProps = defaultProps;
Button.propTypes = propTypes;
export default Button;
