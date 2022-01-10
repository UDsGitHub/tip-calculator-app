import React, { useContext } from "react";
import { AppContext } from "../AppContext";
import icon from "../../images/icon-dollar.svg";

const Bill = () => {
  const { bill, setBill } = useContext(AppContext);
  const handleChange = (e) => {
    e.target.value ? setBill(e.target.value) : setBill(0);
  };

  return (
    <div className="bill-sec">
      <div className="label">
        <label htmlFor="bill">
          <h4>Bill</h4>
        </label>
      </div>
      <div className="billvalue">
        <img src={icon} alt="dollar sign" className="icon" />
        <input
          type="number"
          placeholder="0"
          step={0.01}
          className="billinput inputs"
          onChange={handleChange}
          value={bill ? bill : ""}
        />
      </div>
    </div>
  );
};

export default Bill;
