import * as React from "react";
import Box from '@mui/material/Box';
import BottomNavigation from "@mui/material/BottomNavigation";
import BottomNavigationAction from "@mui/material/BottomNavigationAction";
import RestoreIcon from "@mui/icons-material/Restore";
import FavoriteIcon from "@mui/icons-material/Favorite";
import LocationOnIcon from "@mui/icons-material/LocationOn";

export default function PortfolioContainer() {
  return (
    <Box  sx={{ width: '100%', top: 'auto', bottom: 0  }} position="fixed" color="primary" >
      <BottomNavigation sx={{ backgroundColor: "#1F3A5C" }} showLabels>
        <BottomNavigationAction label="Recents" icon={<RestoreIcon />} />
        <BottomNavigationAction label="Favorites" icon={<FavoriteIcon />} />
        <BottomNavigationAction label="Nearby" icon={<LocationOnIcon />} />
      </BottomNavigation>
    </Box>
  );
}
