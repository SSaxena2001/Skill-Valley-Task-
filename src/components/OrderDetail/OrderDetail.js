import React from "react";
import "./OrderDetail.css";
import OrderPhoto from "../../assets/images/order.png";

const ItemBox = ({ title, variant, quantity, imgUrl, rp_val }) => {
  return (
    <div className="item-box">
      <div className="flex-box">
        <img src={imgUrl} alt="item" className="order-img" />
        <div className="items-full">
          <h1 className="item-box-title">{title.toUpperCase()}</h1>
          <p className="item-variant">VARIANT: {variant.toUpperCase()}</p>
          <p className="item-quantity">
            {quantity}
            <span style={{ color: "var(--primary-color)" }}>{rp_val}</span>
          </p>
        </div>
      </div>
      <input
        className="item-optional-msg"
        placeholder="Optional Message Here..."
      />
    </div>
  );
};

export default function OrderDetail() {
  return (
    <div className="order-detail">
      <h1 className="order-title">Order Detail</h1>
      <ItemBox
        title="original xyzone brand tr1255"
        variant="red, 40"
        quantity="(1PCS 1.100gr) @ "
        rp_val="Rp.100.000"
        imgUrl={OrderPhoto}
      />
      <ItemBox
        title="original xyzone brand tr1255"
        variant="red, 40"
        quantity="(1PCS 1.100gr) @ "
        rp_val="Rp.100.000"
        imgUrl={OrderPhoto}
      />
    </div>
  );
}
