import "./App.css";
import NavBar from "./components/NavBar/NavBar";
import ExtendBox from "./components/ExtendBox/ExtendBox";
import OrderDetail from "./components/OrderDetail/OrderDetail";
import BillBox from "./components/BillBox/BillBox";
import VoucherTag from "./assets/images/voucher.svg";

export default function App() {
  return (
    <div className="App">
      <NavBar />
      <ExtendBox title="delivery address" />
      <div className="dropship">
        <div className="items">
          <h1>DropShip</h1>
          <input
            className="drop-switch-input"
            type="checkbox"
            hidden="hidden"
            id="username"
          />
          <label className="switch" htmlFor="username" />
        </div>
      </div>
      <ExtendBox title="shipping option" />
      <ExtendBox title="payment option" />
      <OrderDetail />
      <section className="voucher">
        <div className="voucher-box">
          <img src={VoucherTag} alt="voucher-tag" className="voucher-tag" />
          <input placeholder={`Voucher Code`} className="voucher-input" />
          <button className="voucher-btn">Apply</button>
        </div>
        <hr className="line-gray" />
      </section>
      <BillBox />
      <h3 className="payment-text">
        With Payment, I agree with terms and conditions
      </h3>
      <div className="finish">
        <button className="finish-btn">FINISH</button>
      </div>
    </div>
  );
}
