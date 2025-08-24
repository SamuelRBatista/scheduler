import React from 'react';
import { AppBar, Toolbar, Typography, Button } from '@mui/material';
import { Link } from 'react-router-dom';

export const Navbar: React.FC = () => {
  return (
    <AppBar 
      position="fixed" // Faz o AppBar ficar fixo no topo
      sx={{ width: '100%', zIndex: (theme) => theme.zIndex.drawer + 1 }}
    >
      <Toolbar>
        <Typography variant="h6" style={{ flexGrow: 1 }}>
          Scheduler
        </Typography>
        <Button color="inherit" component={Link} to="/">
          Home
        </Button>
        <Button color="inherit" component={Link} to="/services">
          Serviços
        </Button>
        <Button color="inherit" component={Link} to="/schedule">
          Agendar
        </Button>
      </Toolbar>
    </AppBar>
  );
};
