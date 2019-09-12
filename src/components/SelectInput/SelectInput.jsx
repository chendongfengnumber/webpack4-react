import React, { Component } from 'react';
import { PropTypes } from 'prop-types';
import Classnames from 'classnames';

import './selectInput.scss';
import '../../asset/iconfont/iconfont.css';
import DropdownList from '../DropdownList/DropdownList';

const propTypes = {
  inputLeftHint: PropTypes.string, // 输入框左边提示语
  placeholder: PropTypes.string, // 输入框内默认提示
  onChange: PropTypes.func, // 输入框输入值回调
};

const defaultProps = {
  inputLeftHint: '',
  placeholder: '',
  onChange: null,
};

class SelectInput extends Component {

  constructor(props) {
    super(props);

    this.state = {
      isShowSelectData: false,
      isFocus: false,
      data: [
        { name: '深圳', isSelected: false },
        { name: '泉州', isSelected: false },
      ],
      inputValue: '',
    };

    this.onClickSelectInput = this.onClickSelectInput.bind(this);
    this.closeDropdownData = this.closeDropdownData.bind(this);
    this.onItemSelected = this.onItemSelected.bind(this);
  }

  componentDidMount() {
    document.addEventListener('click', this.closeDropdownData);
  }

  componentWillUnmount() {
    document.removeEventListener('click', this.closeDropdownData);
  }


  async onItemSelected(item) {
    const { data } = this.state;
    const { onChange } = this.props;
    const selectedData = data.map((dataItem) => {
      if (dataItem.name === item.name) {
        return {
          ...dataItem,
          isSelected: true,
        };
      }
      return { ...dataItem };
    });
    await this.setState({ inputValue: item.name, data: selectedData });
    if (onChange) {
      onChange(this.state.inputValue);
    }
  }

  async onClickSelectInput(event, isInputCreator = false) {
    event.persist();

    // 这部分逻辑解决input获得焦点，但是下拉框未展示的
    let isFocus = !this.state.isFocus;
    if (isInputCreator) {
      isFocus = true;
    }
    if (!this.state.isShowSelectData && this.state.isFocus) {
      isFocus = true;
    }

    await this.setState({
      isShowSelectData: !this.state.isShowSelectData,
      isFocus,
    });

    if (!isInputCreator) {
      if (!this.state.isShowSelectData) {
        return this.inputRef.blur();
      }
      this.inputRef.focus();
    }
  }

  closeDropdownData(event) {
    if (event.target.id !== 'reset_input_default_style' &&
        event.target.id !== 'reset_input_default_style_focus' &&
        event.target.id !== 'icon') {
      this.inputRef.blur();
      this.setState({ isShowSelectData: false, isFocus: false });
    }
  }
  renderArrow() {
    const { isShowSelectData } = this.state;
    if (isShowSelectData) {
      return (
        <span
          className="iconfont icon-arrow_up iconfont_size reset_iconfont_size icon_position"
          id="icon"
          onClick={this.onClickSelectInput}
        />
      );
    }
    return (
      <span
        className="iconfont icon-arrow_down iconfont_size reset_iconfont_size icon_position"
        id="icon"
        onClick={this.onClickSelectInput}
      />
    );
  }
  renderSelectDataList() {
    const { isShowSelectData, data } = this.state;
    if (isShowSelectData) {
      return (
        <div className="data_list_container">
          <DropdownList
            data={data}
            onSelected={this.onItemSelected}
          />
        </div>
      );
    }
    return null;
  }
  render() {
    const {
      inputLeftHint,
      placeholder,
    } = this.props;
    const {
      inputValue,
      isFocus,
    } = this.state;
    return (
      <div className="container">
        {inputLeftHint ? (<div className="input_left_hint" > {inputLeftHint}: </div>) : null}
        <div className="input_container">
          <input
            ref={(ref) => { this.inputRef = ref; }}
            id={Classnames(
              { reset_input_default_style_focus: isFocus },
              { reset_input_default_style: !isFocus },
            )}
            className="input_default_style"
            readOnly
            type="text"
            autoComplete="off"
            onClick={e => this.onClickSelectInput(e, true)}
            placeholder={placeholder}
            value={inputValue}
          />
          {this.renderArrow()}
          { this.renderSelectDataList() }
        </div>
      </div>

    );
  }

}

SelectInput.defaultProps = defaultProps;
SelectInput.propTypes = propTypes;
export default SelectInput;
