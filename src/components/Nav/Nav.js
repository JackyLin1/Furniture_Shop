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
  const [open, setOpen] = useState(false);
  const anchorRef = useRef(null);

  const handleToggle = () => {
    setOpen((prevOpen) => !prevOpen)
  }

  const handleClose = (event) => {
      if(anchorRef.current && anchorRef.current.contains(event.target)) {
        return;
      }
  }
  
  const handleListKeyDown = (event) => {
    if (event.key === 'Tab') {
      event.preventDefault();
      setOpen(false);
    } else if (event.key === 'Escape') {
      setOpen(false);
    }
  }

  const prevOpen = React.useRef(open);
  React.useEffect(() => {
    if (prevOpen.current === true && open === false) {
      anchorRef.current.focus();
    }

    prevOpen.current = open;
  }, [open]);


return (
  <Stack className="nav" direction='row' spacing={2}>
    <div className="container">
      <img src={logo} alt="logo"></img>
      <div className="">
        <Button
        className="AboutBtn"
        >About</Button>

      <div>
        <Button
        id="catalogueBtn"
        aria-controls={open ? 'CatalogueList' : undefined}
        aria-expanded={open ? 'true' : undefined}
        aria-haspopup="true"
        onClick={handleToggle}>Catalogue</Button>

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
    
        <Paper>
          <ClickAwayListener onClickAway={handleClose}>
            <MenuList
              autoFocusItem={open}
              id="CatalogueList"
              aria-labelledby="catalogueBtn"
              onKeyDown={handleListKeyDown}
              >
                <MenuItem onClick={handleClose}>Profile</MenuItem>
                <MenuItem onClick={handleClose}>My account</MenuItem>
                <MenuItem onClick={handleClose}>Logout</MenuItem>
            </MenuList>
          </ClickAwayListener>
        </Paper>
      </Grow>
    )}
        </Popper>
      </div>
        
      </div>
    </div>

      
  </Stack>
)
};

export default Nav;