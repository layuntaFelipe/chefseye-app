import React from 'react'
import arrowDown from '../images/arrowDown.svg';
import '../panelStyle.css';
import ManageCell from './ManageCell';
import PropTypes from 'prop-types';

function ManageBox({bgColor, titleBGColor, title, titleColor}) {
  const slides = [1,2,3,4,5,6,7,8];

  return (
    <div className="containerManage" style={{backgroundColor: bgColor}}>
        <div className="titleContainer" style={{backgroundColor: titleBGColor}}>
            <h5 style={{color: titleColor}}>{title}</h5>
        </div>
        <div className="manageSlides" id='manageScroll'>
          {slides.map((slide,index)=>{
              return(
                  <ManageCell/>
              );
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
  titleColor: 'black'
}

ManageBox.propTypes = {
  bgColor: PropTypes.string,
  titleBGColor: PropTypes.string,
  title: PropTypes.string,
  titleColor: PropTypes.string,
}

export default ManageBox