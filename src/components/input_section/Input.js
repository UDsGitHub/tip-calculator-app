import React from 'react'
import Bill from "./Bill";
import Npeople from "./Npeople";
import Tips from "./Tips";

const Input = () => {
    return (
      <div className='input-sec'>
        <Bill />
        <Tips />
        <Npeople />
      </div>
    );
}

export default Input
