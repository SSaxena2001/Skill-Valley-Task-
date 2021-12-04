import React from "react";
import "./BillBox.css";

const items = [
  { title: "Total items", value: "2 Item" },
  { title: "Total Weight", value: "2.2000 Gram" },
  { title: "Total Order", value: "Rp. 360.000" },
  { title: "Voucher", value: "Rp.       0" },
  { title: "Shipping Cost", value: "Rp.       0" },
];

export default function BillBox() {
  return (
    <div className="bill-box">
      {items.map((item) => {
        return (
          <div className="bill-row">
            <h4 className="bill-title">{item.title}</h4>
            <p className="bill-value">{item.value}</p>
          </div>
        );
      })}
      <div className="bill-row">
        <h4 className="bill-title">Grand Total</h4>
        <p className="bill-value" style={{ color: "var(--primary-color)" }}>
          Rp. 360.000
        </p>
      </div>
    </div>
  );
}
