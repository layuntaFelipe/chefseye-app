import React from 'react'
import burger from '../images/burger.svg';
import '../panelStyle.css';

function InfoBox() {
  return (
    <div className="containerInfo">
        <div className="info">
            <h3>Chef's Burger</h3>
            <h2>+$14.99</h2>
            <small>15 seconds ago</small>
        </div>
        <img src={burger} alt="" />
    </div>
  )
}

export default InfoBox;