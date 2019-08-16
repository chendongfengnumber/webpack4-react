import React, { Component } from 'react';
import { PropTypes } from 'prop-types';
import lodash from 'lodash';

const propTypes = {
  uploadResultCallBack: PropTypes.func.isRequired,
};

class UploadFile extends Component {

  constructor(props) {
    super(props);

    this.uploadFile = this.uploadFile.bind(this);
    this.onchangeFileInfo = this.onchangeFileInfo.bind(this);

    this.state = {
      loaded: 0, // 已经上传文件的大小
      total: 0, // 要上传文件的大小
      file: {}, // 上传的文件信息
    };
  }

  onchangeFileInfo(event) {
    // 防止event.taget为null
    event.persist();
    const file = lodash.get(event, 'target.files[0]') || {};
    this.setState({ file });
  }


  uploadFile() {
    const { uploadResultCallBack } = this.props;
    const { file } = this.state;
    if (!file.name) {
      return alert('请上传文件');
    }

    // ajax请求
    const xhr = new XMLHttpRequest();
    const formData = new FormData();
    formData.append('file', file);
    xhr.open('POST', 'http://localhost:3000/file/upload');
    xhr.send(formData);

    xhr.onprogress = (event) => {
      const { total, loaded, lengthComputable } = event;
      if (lengthComputable) {
        // onprogressCallBack(totalSize, alreadyAcceptedSize);
        console.log(`总字节： ${total}, 已经接收的字节： ${loaded}`);
      }
    };
    xhr.onreadystatechange = () => {
      if (xhr.readyState === 4) {
        if ((xhr.status >= 200 && xhr.status < 300) || xhr.status === 304) {
          uploadResultCallBack(xhr.responseText);
        }
      }
    };
  }
  render() {
    return (
      <div>
        <input type="file" ref={this.textInput} onChange={this.onchangeFileInfo} />
        <input type="submit" value="提交" onClick={this.uploadFile} />
      </div>
    );
  }
}

UploadFile.propTypes = propTypes;
export default UploadFile;
