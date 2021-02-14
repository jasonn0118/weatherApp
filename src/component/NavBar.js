import React from 'react';
import { AppBar, Toolbar, Typography } from '@material-ui/core';
const NavBar = () => {
  return (
    <div className="navbar-content">
        <AppBar position="static">
          <Toolbar>
              <Typography variant="h4" className="title">
                  Weather App
              </Typography>
          </Toolbar>
        </AppBar>
    </div>
  );
};

export default NavBar;
