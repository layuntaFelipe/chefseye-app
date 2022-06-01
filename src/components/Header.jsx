import React from 'react';
import '../panelStyle.css';
import personIcon from '../images/personIcon.svg';
import logo from '../images/logo.svg';
import Popover from '@mui/material/Popover';
import InfoBox from './InfoBox';

function Header() {

  const checkForActive = () => {
    console.log('hi');
  }

  const headerLinkNames = ['Panel', 'Manage', 'Kitchen', 'Menu', 'Create QR'];

  const [anchorEl, setAnchorEl] = React.useState(null);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const open = Boolean(anchorEl);
  const id = open ? 'simple-popover' : undefined;

  return (
    <header className='containerHeader'>
        <img src={logo} alt="" />
        <ul>
            {
              headerLinkNames.map((links, index) => {
                return (
                  <li onMouseOver={checkForActive}>{links}</li>
                );
              })
            }
        </ul>
        <div className="profile">
            <h4>Restaurant 1</h4>
            <img src={personIcon} alt="" aria-describedby={id} variant="contained" onClick={handleClick} />
            <Popover
              id={id}
              open={open}
              anchorEl={anchorEl}
              onClose={handleClose}
              anchorOrigin={{
                vertical: 'bottom',
                horizontal: 'right',
              }}
              transformOrigin={{
                vertical: 'top',
                horizontal: 'right',
              }}
            >
              <InfoBox/>
            </Popover>
        </div>
    </header>
  )
}

export default Header