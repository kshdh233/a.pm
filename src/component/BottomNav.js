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


function FixedBottomNavigation() {
  const [value, setValue] = React.useState(0);
  const ref = React.useRef(null);

  return (

    <Box sx={{ pb: 7 }} ref={ref}>
      <CssBaseline />
     
      <Paper sx={{ position: 'fixed', bottom: 0, left: 0, right: 0 }} elevation={5}>
        <BottomNavigation
          showLabels
          value={value}
          onChange={(event, newValue) => {
            setValue(newValue);
          }}
        >
          <BottomNavigationAction label="공연장 정보" icon={<Place />} href='ConcertHall_page'/>

          <BottomNavigationAction label="공연 정보" icon={<TheaterComedy />} />

          <BottomNavigationAction label="" icon={<Home />} href='Main_page'/>

          <BottomNavigationAction label="찜" icon={<FavoriteIcon />} />

        
          <BottomNavigationAction label="마이페이지" icon={<PersonOutline />} href='My_page'/>

        </BottomNavigation>
      </Paper>
    </Box>
  );
}

export default FixedBottomNavigation;
