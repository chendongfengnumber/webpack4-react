import React, { Component } from 'react';

import UploadPhoto from '../../components/UploadPhoto/UploadPhoto';
import Input from '../../components/CommonInput/CommonInput';
import SelectInput from '../../components/SelectInput/SelectInput';
import Button from '../../components/Button/Button';

import '../../styles/order/createOrder.scss';

class CreateOrder extends Component {

  constructor(props) {
    super(props);

    this.getUploadResult = this.getUploadResult.bind(this);
    this.getChangeOrderId = this.getChangeOrderId.bind(this);
    this.getChangePackageId = this.getChangePackageId.bind(this);
    this.getChangeInventoryName = this.getChangeInventoryName.bind(this);
    this.getUploadMainProductResult = this.getUploadMainProductResult.bind(this);
    this.submitOrder = this.submitOrder.bind(this);

    this.state = {
      shoppeOrderId: 0,
      shoppeInventoryName: '',
      packageId: 0,
      pdfFileId: '',
      mainProductFileId: '',
    };
  }

  getChangeOrderId(value) {
    this.setState({ shoppeOrderId: value });
  }

  getChangePackageId(value) {
    this.setState({ packageId: value });
  }

  getChangeInventoryName(value) {
    this.setState({ shoppeInventoryName: value });
  }

  getUploadResult(pdfFileId) {
    this.setState({ pdfFileId });
  }

  getUploadMainProductResult(mainProductFileId) {
    this.setState({ mainProductFileId });
  }


  submitOrder() {
    const {
      shoppeOrderId,
      shoppeInventoryName,
      packageId,
      pdfFileId,
      mainProductFileId,
    } = this.state;

    if (!shoppeOrderId) {
      return alert('请填写SHOPEE订单号');
    }

    if (!shoppeInventoryName) {
      return alert('请选择SHOPEE仓库');
    }

    if (!packageId) {
      return alert('请填写包裹快递单号');
    }

    if (!pdfFileId) {
      return alert('请上传SHOPEE面单PDF');
    }



  }

  render() {
    return (
      <div>
        <div>创建订单</div>
        <div className="shoppe_input_container">
          <Input
            inputLeftHint="SHOPEE订单号"
            onChangeCallback={this.getChangeOrderId}
          />
        </div>
        <div className="shoppe_input_container">
          <SelectInput
            inputLeftHint="SHOPEE仓库"
            placeholder="请求选择你需要的仓库"
            onChange={this.getChangeInventoryName}
          />
        </div>
        <div className="shoppe_input_container">
          <Input
            inputLeftHint="包裹快递单号"
            onChangeCallback={this.getChangePackageId}
          />
        </div>
        <div className="shopee_pdf_container">
          <div className="pdf_hint">备注信息</div>
          <textarea
            cols="30"
            rows="10"
            className="textarea_container"
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
            uploadResultCallBack={this.getUploadMainProductResult}
          />
        </div>
        <div>
          <text>剩余积分:</text>
          <text>0</text>
          <text>分</text>
          <text>(积分不足，请先</text>
          <text>充值)</text>
        </div>
        <div className="button_container">
          <Button
            content="提交"
            type="primary"
            size="large"
            disabled={false}
            onClick={this.submitOrder}
          />
        </div>
      </div>
    );
  }
}

export default CreateOrder;
