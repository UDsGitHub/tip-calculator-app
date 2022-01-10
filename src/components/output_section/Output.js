import React, { useContext } from "react";
import { AppContext } from "../AppContext";


// Reset Component

const Reset = ({active}) => {
  const { setBill, selectedTip, setSelectedTip, customTip, setCustomTip, setNpeople } = useContext(AppContext);
  let classVals = `reset ${active ? 'active' : ''}`;

  const handleClick = (e) => {
    if (active){
      setBill(0);
      if (selectedTip.checked) {
        selectedTip.checked = false
      }
      if (selectedTip.value){
        console.log("hello world");
        selectedTip.value = ""
      }
      if (customTip) {
        setCustomTip("")
      }
      setSelectedTip(0);
      setNpeople(1);
      active = false;
    }else{
      e.target.onclick = null
    }
  }

  return (
    <button className={classVals} id="reset" onClick={handleClick}>
      RESET
    </button>
  );
}

// Output Component

const Output = () => {
  const { bill, selectedTip, customTip, npeople } = useContext(AppContext);
  let tipAmount = calcTip(selectedTip, customTip);
  let totalAmount = calcTotal();

  function calcTip(tipRad, custTip) {
    
    if (tipRad){
      if (npeople === "" || parseInt(npeople) === 0) {
        return 0;
      } else {
        return ((tipRad.value * 0.01 * bill) / parseInt(npeople)).toFixed(2);
      }
    } else if (custTip) {
      if (npeople === "" || parseInt(npeople) === 0) {
        return 0;
      } else if (custTip === "") {
        return 0;
      } else {
        return ((custTip * 0.01 * bill) / parseInt(npeople)).toFixed(2);
      }
    }
  }

  function calcTotal(){
    if(tipAmount){
      if (npeople === "" || parseInt(npeople) === 0) {
        return 0;
      } else {
        return (bill / parseInt(npeople) + parseFloat(tipAmount)).toFixed(2);
      }
    }
    else{
      if (npeople === "" || parseInt(npeople) === 0) {
        return 0;
      } else {
        return (bill / parseInt(npeople)).toFixed(2);
      }
    }
  }

  let resetStat = false;
  if (bill || selectedTip || npeople > 1) {
    resetStat = true;
  } else {
    resetStat = false;
  }

  
  return (
    <div className="output-sec">
      <div className="output-values">
        <div className="tip-amount">
          <div className="label">
            <h4>Tip Amount</h4>
            <p>/ person</p>
          </div>
          <div className="output-value">${tipAmount ? tipAmount : "0.00"}</div>
        </div>
        <div className="total">
          <div className="label">
            <h4>Total</h4>
            <p>/ person</p>
          </div>
          <div className="output-value">${totalAmount ? totalAmount : "0.00"}</div>
        </div>
      </div>
      <Reset active={resetStat}/>
    </div>
  );
};

export default Output;
