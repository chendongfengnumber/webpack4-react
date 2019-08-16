import React, { Component } from 'react';
import Upload from '../../components/Upload';

class CreateOrder extends Component {

  constructor(props) {
    super(props);

    this.getUploadResult = this.getUploadResult.bind(this);

    this.state = {
      fileId: 0,
    };
  }

  getUploadResult(uploadResult) {
    const { _id } = uploadResult;
    this.setState({
      fileId: _id,
    });
    console.log('上传完成后信息', uploadResult);
  }
  render() {
    return (
      <div>
        <Upload
          uploadResultCallBack={this.getUploadResult}
        />
      </div>
    );
  }
}

export default CreateOrder;
