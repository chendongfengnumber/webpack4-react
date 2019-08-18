import React, { Component } from 'react';
import { PropTypes } from 'prop-types';
import lodash from 'lodash';
import '../styles/components/upload.scss';
import '../asset/iconfont/iconfont.css';

const propTypes = {
  uploadResultCallBack: PropTypes.func.isRequired,
};

const uploadStatus =  {
  unupload: 'UNUPLOAD', // 未上传
  uploadig: 'UPLOADING', // 上传中
  uploaded: 'UPLOADED' // 上传完毕
}

class UploadFile extends Component {

  constructor(props) {
    super(props);

    this.uploadFile = this.uploadFile.bind(this);
    this.onchangeFileInfo = this.onchangeFileInfo.bind(this);
    this.eventDelegate = this.eventDelegate.bind(this);

    this.state = {
      loaded: 0, // 已经上传文件的大小
      total: 0, // 要上传文件的大小
      // file: {}, // 上传的文件信息
      loadStatus: 'UNUPLOAD',
      previewUrl: ''
    };
  }

  eventDelegate(event) {
    event.persist()
    console.log('event', event)
  }

  onchangeFileInfo(event) {
    // 防止event.taget为null
    event.persist();
    const file = lodash.get(event, 'target.files[0]') || {};

    // 上传图片
    this.uploadFile(file);

    // 图片预览
    this.previewPicture(file);
  }

  previewPicture(file) {
    // 实现图片预览
    let fileReader;
    if(FileReader) {
      fileReader = new FileReader();
    } else {
      alert('该浏览不支持图片预览');
      return;
    }

    fileReader.readAsDataURL(file);
    fileReader.onloadend = (e) => {
      const previewUrl = lodash.get(e, 'target.result') || '';
      this.setState({ loadStatus: uploadStatus.uploaded, previewUrl });
      console.log(e, 'e');
    }
  }

  uploadFile(file) {
    const { uploadResultCallBack } = this.props;
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

  /**
   *  以下为html渲染 
   * */

  renderUpload() {
    const { loadStatus, previewUrl } =  this.state;
    console.log('test', loadStatus, previewUrl)
    
    switch(loadStatus) {
      case uploadStatus.unupload: 
        return (
          <div className="uploadContainer" onClick={this.eventDelegate}>
            <label className="uploadContainer, upload" htmlFor="file">
              <span className="iconfont icon-icon_add iconfont_size"></span>
            </label>
            <input
              id="file"
              type="file" 
              ref={this.textInput} 
              onChange={this.onchangeFileInfo}
              name='test'
            />
          </div>
        )
      case uploadStatus.uploaded:
        return(
          <div className='uploadingContainer'>
            <img src={previewUrl} alt="preview_picture" width="146px" height="146px"/>
          </div>
        );
    }
    
  }

  render() {
    return (
      <div >
        { this.renderUpload() }
      </div>
    );
  }
}

UploadFile.propTypes = propTypes;
export default UploadFile;