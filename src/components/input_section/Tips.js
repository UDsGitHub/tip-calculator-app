import React, { useContext } from "react";
import { AppContext } from "../AppContext";

const Tip = ({ id, value }) => {
  const { setSelectedTip, setCustomTip } = useContext(AppContext);

  const handleClick = (e) => {
    setSelectedTip(e.target);
    e.target.checked = true;
    setCustomTip("")
  };

  return (
    <label className="tip" htmlFor={id}>
      <input
        type="radio"
        id={id}
        value={value}
        className="tipradio"
        name="tip"
        onClick={handleClick}
      />
      <span className="tip-text">{value}%</span>
    </label>
  );
};

const CustomTip = () => {
  const { selectedTip, setSelectedTip, customTip, setCustomTip } = useContext(AppContext);
  const handleCustomTip = (e) => {
    if (selectedTip.checked) {
      selectedTip.checked = false
      setCustomTip(e.target.value);
    } else{
      setSelectedTip(0);
      setCustomTip(e.target.value);
    }
  };
  return (
    <div className="customtip">
      <input
        type="number"
        id="custom-tip"
        placeholder="Custom"
        className="customtip-input inputs"
        onChange={handleCustomTip}
        value={customTip ? customTip : ""}
      />
    </div>
  );
};

const Tips = () => {
  return (
    <div className="tip-sec">
      <h4>Select Tip %</h4>
      <div className="tips" id="tips">
        <Tip id="five" value={5} />
        <Tip id="ten" value={10} />
        <Tip id="fifteen" value={15} />
        <Tip id="twentyfive" value={25} />
        <Tip id="fifty" value={50} />
        <CustomTip />
      </div>
    </div>
  );
};

export default Tips;
