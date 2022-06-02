import React from 'react'
import burger from '../images/burger.svg';
import '../panelStyle.css';

function MenuCell() {
  return (
    <div className="containerCell">
        <div className="infoCellProfit">
            <h4>Chef's Burger</h4>
            <small>This is a description of this product and thus it does</small>
            <h5>CAD 14.99</h5>
        </div>
        <img src={burger} alt="" id='food' />
    </div>
  )
}

export default MenuCell