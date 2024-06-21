import React from 'react';
import { AppBar as MuiAppBar, Toolbar, Typography, Button } from '@mui/material';
import { Link } from 'react-router-dom';

const AppBar = () => {
  return (
    <MuiAppBar position="static">
      <Toolbar>
        <Typography variant="h6" style={{ flexGrow: 1 }}>
          Explorer Gallery
        </Typography>
        <Button color="inherit" component={Link} to="/unsplash">Unsplash Photos</Button>
        <Button color="inherit" component={Link} to="/rick-and-morty">Rick and Morty</Button>
      </Toolbar>
    </MuiAppBar>
  );
};

export default AppBar;
