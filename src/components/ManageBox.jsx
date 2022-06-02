import React from 'react'
import arrowDown from '../images/arrowDown.svg';
import '../panelStyle.css';
import ProfitCell from './ProfitCell';
import MenuCell from './MenuCell';
import StorageCell from './StorageCell';
import PropTypes from 'prop-types';
import {storageArray} from '../data.js';

function ManageBox({bgColor, titleBGColor, title, titleColor, type, number}) {
  const slides = [];
  for (let i = 0; i < number; i++) {
    slides.push(i);
  }
  let outputCell;

  return (
    <div className="containerManage" style={{backgroundColor: bgColor}}>
        <div className="titleContainer" style={{backgroundColor: titleBGColor}}>
            <h5 style={{color: titleColor}}>{title}</h5>
        </div>
        <div className="manageSlides" id='manageScroll'>
          {slides.map((slide,index)=>{
            switch (type) {
              case 1:
                outputCell = <ProfitCell/>;
                break;
              case 2:
                outputCell = <MenuCell/>;
                break;
              case 3:
                outputCell = <StorageCell sign={storageArray[index].isPositive} percentage={storageArray[index].value}/>;
                break;
              default:
                outputCell = <ProfitCell/>;
                break;
            }
            return(outputCell);
          })}
        </div>
        <img src={arrowDown} alt="" id='arrowDown' />
    </div>
  )
}

ManageBox.defaultProps = {
  bgColor: '#8D99AE',
  titleBGColor: '#ECEFF0',
  title: 'Last Profit',
  titleColor: 'black',
  type: 1,
}

ManageBox.propTypes = {
  bgColor: PropTypes.string,
  titleBGColor: PropTypes.string,
  title: PropTypes.string,
  titleColor: PropTypes.string,
  type: PropTypes.number,
}

export default ManageBox