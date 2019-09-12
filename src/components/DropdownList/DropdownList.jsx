import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Classnames from 'classnames';

import './dropdownList.scss';

const propTypes = {
  data: PropTypes.array,
  onSelected: PropTypes.func.isRequired,
};

const defaultProps = {
  data: [],
};

class DropdownList extends Component {

  constructor(props) {
    super(props);

    this.onItemSelected = this.onItemSelected.bind(this);
  }

  onItemSelected(item) {
    const { onSelected } = this.props;
    onSelected(item);
  }
  render() {
    const { data = [] } = this.props;
    return (
      <div className="data_list">
        {
          data.map(item => (
            <div
              className={Classnames('item', { selected: item.isSelected })}
              key={item.name}
              onClick={() => this.onItemSelected(item)}
            >
              { item.name }
            </div>
          ))
        }
      </div>
    );
  }
}

DropdownList.propTypes = propTypes;
DropdownList.defaultProps = defaultProps;
export default DropdownList;
