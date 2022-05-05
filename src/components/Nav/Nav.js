import React, {useState, useRef} from "react";
import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack'; 
import MenuItem from '@mui/material/MenuItem';
import MenuList from '@mui/material/MenuList';
import ClickAwayListener from '@mui/material/ClickAwayListener';
import Paper from '@mui/material/Paper';
import Grow from '@mui/material/Grow';
import Popper from '@mui/material/Popper';
import logo from "../../images/Logo2.png";
import "./Nav.css"

function Nav () {

    const [open, setOpen] = React.useState(false);
    const anchorRef = React.useRef(null);
  
    const handleToggle = () => {
      setOpen((prevOpen) => !prevOpen);
    };
  
    const handleClose = (event) => {
      if (anchorRef.current && anchorRef.current.contains(event.target)) {
        return;
      }
  
      setOpen(false);
    };
  
    function handleListKeyDown(event) {
      if (event.key === 'Tab') {
        event.preventDefault();
        setOpen(false);
      } else if (event.key === 'Escape') {
        setOpen(false);
      }
    }
  
    // return focus to the button when we transitioned from !open -> open
    const prevOpen = React.useRef(open);
    React.useEffect(() => {
      if (prevOpen.current === true && open === false) {
        anchorRef.current.focus();
      }
  
      prevOpen.current = open;
    }, [open]);
  
    return (
      <Stack direction="row" spacing={3}>
      <div className="container">
       <img src={logo} alt="logo"></img>
       <Button>
         About
       </Button>
          <Button
            ref={anchorRef}
            id="composition-button"
            aria-controls={open ? 'composition-menu' : undefined}
            aria-expanded={open ? 'true' : undefined}
            aria-haspopup="true"
            onClick={handleToggle}
            variant="outlined"
            >
            Catalogue
          </Button>
          <Popper
            open={open}
            anchorEl={anchorRef.current}
            role={undefined}
            placement="bottom-start"
            transition
            disablePortal
          >
            {({ TransitionProps, placement }) => (
              <Grow
              {...TransitionProps}
              style={{
                transformOrigin:
                placement === 'bottom-start' ? 'left top' : 'left bottom',
              }}
              >
                <Paper elevation={24}>
                  <ClickAwayListener onClickAway={handleClose}>
                    <MenuList
                      autoFocusItem={open}
                      id="composition-menu"
                      aria-labelledby="composition-button"
                      onKeyDown={handleListKeyDown}
                      >
                      <MenuItem onClick={handleClose}>BedRoom</MenuItem>
                      <MenuItem onClick={handleClose}>BathRoom</MenuItem>
                      <MenuItem onClick={handleClose}>LivingRoom</MenuItem>
                    </MenuList>
                  </ClickAwayListener>
                </Paper>
              </Grow>
            )}
          </Popper>
          <Button>
            Contact Us
          </Button>
        </div>
      </Stack>
    );
  }

export default Nav;