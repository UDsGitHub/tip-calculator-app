import React, { useContext, useState, useEffect } from "react";
import { AppContext } from "../AppContext";
import icon from "../../images/icon-person.svg";

const Npeople = () => {
  const {npeople, setNpeople} = useContext(AppContext)
  const [showError, setShowError] = useState(false);

  const handleChange = (e) => {
    setNpeople(e.target.value);
  }

  useEffect(() => {
    if (parseInt(npeople) === 0) {
      setShowError(true);
    } else {
      setShowError(false);
    }
  }, [npeople])

  let spanClassList = showError ? "npeople-error" : null;
  let inputClassList = showError
    ? "npeopleinput inputs npeople-error"
    : "npeopleinput inputs";

  return (
    <div className="npeople">
      <div className="npeople-label label">
        <label htmlFor="npeople">
          <h4 className="sec-label">Number of People</h4>
        </label>
        <span className={spanClassList}>{ showError ? "Can't be zero" : null}</span>
      </div>
      <div className="npeople-value">
        <img src={icon} alt="dollar sign" className="icon" />
        <input
          type="number"
          placeholder="0"
          id="npeople"
          className={inputClassList}
          onChange={handleChange}
          value={npeople}
          min={1}
          step={1}
        />
      </div>
    </div>
  );
};

export default Npeople;
