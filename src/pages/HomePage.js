// frontend/src/pages/HomePage.js
import React, { useState } from 'react';
import { Box, Typography, IconButton, Drawer } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import HomeIcon from '@mui/icons-material/Home';
import NotificationsIcon from '@mui/icons-material/Notifications';
import PersonIcon from '@mui/icons-material/Person';
import MicIcon from '@mui/icons-material/Mic';
import { useNavigate } from 'react-router-dom';
import Sidebar from '../components/NSidebar';

const drawerWidth = 240;

const HomePage = () => {
  const navigate = useNavigate();
  const [mobileOpen, setMobileOpen] = useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const handleLogout = () => {
    localStorage.removeItem('token');
    navigate('/login');
  };

  const onSelectSession = (session) => {
    // Handle session selection, e.g., navigate to a session detail page or show details in a modal
    console.log('Selected session:', session);
  };

  return (
    <Box sx={{ display: 'flex', minHeight: '100vh' }}>
      <Drawer
        variant="temporary"
        open={mobileOpen}
        onClose={handleDrawerToggle}
        ModalProps={{ keepMounted: true }}
        sx={{
          display: { xs: 'block', sm: 'none' },
          '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth }
        }}
      >
        <Sidebar handleLogout={handleLogout} onSelectSession={onSelectSession} />
      </Drawer>
      <Drawer
        variant="permanent"
        sx={{
          display: { xs: 'none', sm: 'block' },
          '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth }
        }}
        open
      >
        <Sidebar handleLogout={handleLogout} onSelectSession={onSelectSession} />
      </Drawer>
      <Box sx={{ flex: 1, display: 'flex', flexDirection: 'column', marginLeft: { sm: `${drawerWidth}px`, xs: '0' } }}>
        <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '1rem', backgroundColor: '#F4F9F4' }}>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            edge="start"
            onClick={handleDrawerToggle}
            sx={{ display: { sm: 'none' } }}
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" sx={{ flexGrow: 1, paddingLeft: 2 }}>
            
          </Typography>
          <Box sx={{ display: 'flex', alignItems: 'center' }}>
            <IconButton onClick={() => navigate('/home')}>
              <HomeIcon />
            </IconButton>
            <IconButton>
              <NotificationsIcon />
            </IconButton>
            <IconButton onClick={() => navigate('/profile')}>
              <PersonIcon />
            </IconButton>
          </Box>
        </Box>
        <Box sx={{ flex: 1, display: 'flex', justifyContent: 'center', alignItems: 'center', backgroundColor: '#F4F9F4' }}>
          <Box sx={{ textAlign: 'center', margin: '0 auto' }}>
            <IconButton sx={{ backgroundColor: '#D3ECDC', padding: '2rem' }} onClick={() => navigate('/session/start')}>
              <MicIcon fontSize="large" />
            </IconButton>
            <Typography sx={{ marginTop: '1rem', color: 'black' }}>Start Conversation</Typography>
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default HomePage;
