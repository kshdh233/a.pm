import * as React from 'react';
import Box from '@mui/material/Box';
import CssBaseline from '@mui/material/CssBaseline';
import BottomNavigation from '@mui/material/BottomNavigation';
import BottomNavigationAction from '@mui/material/BottomNavigationAction';
import RestoreIcon from '@mui/icons-material/Restore';
import FavoriteIcon from '@mui/icons-material/Favorite';
import ArchiveIcon from '@mui/icons-material/Archive';
import Paper from '@mui/material/Paper';
import { Home, PersonOutline, Place, TheaterComedy } from '@mui/icons-material';
import { useNavigate } from 'react-router';
import { Outlet } from 'react-router-dom';

function FixedBottomNavigation() {
  const [value, setValue] = React.useState(4);
  const ref = React.useRef(null);
  const navigate = useNavigate();
  // label, icon, url
  const navInfo = [
    ['공연장 정보', <Place />, '/ConcertHall_page'],
    ['공연 정보', <TheaterComedy />, '/Play_information_page'],
    ['', <Home />, '/Main_page'],
    ['찜', <FavoriteIcon />, '/'],
    ['마이페이지', <PersonOutline />, '/My_page'],
  ]
  return (
    <>
      <Outlet />
      <Box sx={{ pb: 7 }}>
        <CssBaseline />

        {/* Apply "position: fixed" style to the container */}
        <Paper sx={{ position: 'fixed', bottom: 0, left: 0, right: 0 }} elevation={5}>
          <BottomNavigation
            showLabels
            value={value}
            onChange={(event, newValue) => {
              navigate(navInfo[newValue][2]);
              setValue(newValue);
            }}
          >
            {navInfo.map((nav, idx) => 
            <BottomNavigationAction 
            key={idx} 
            label={nav[0]} 
            icon={nav[1]} 
            />
            )}
          </BottomNavigation>
        </Paper>
      </Box>
    </>
  );
}

export default FixedBottomNavigation;
