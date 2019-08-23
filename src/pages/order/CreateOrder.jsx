import React, { Component } from 'react';
import UploadPhoto from '../../components/UploadPhoto';
import Input from '../../components/CommonInput';

import '../../styles/order/createOrder.scss';

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
  }
  render() {
    return (
      <div>
        <div>
          <Input
            inputLeftHint="SHOPEE订单号"
          />
        </div>
        <div>
          <div>SHOPEE仓库</div>
          <input type="image" />
        </div>
        <div>
          <Input
            inputLeftHint="包裹快递单号"
          />
        </div>
        <div className="shopee_pdf_container">
          <div className="pdf_hint">SHOPEE面单PDF</div>
          <UploadPhoto
            uploadResultCallBack={this.getUploadResult}
          />
        </div>
        <div className="shopee_pdf_container">
          <div className="pdf_hint">商品主图（选填）</div>
          <UploadPhoto
            uploadResultCallBack={this.getUploadResult}
          />
        </div>
        <div>
          <div>备注信息</div>
        </div>

      </div>
    );
  }
}

export default CreateOrder;
