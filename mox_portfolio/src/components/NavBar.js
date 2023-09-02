import * as React from "react";
import Paper from '@mui/material/Paper';
import BottomNavigation from "@mui/material/BottomNavigation";
import BottomNavigationAction from "@mui/material/BottomNavigationAction";
import AccountTreeRoundedIcon from '@mui/icons-material/AccountTreeRounded';
import PersonSearchRoundedIcon from '@mui/icons-material/PersonSearchRounded';
import ConnectWithoutContactRoundedIcon from '@mui/icons-material/ConnectWithoutContactRounded';

export default function NavBar() {
  return (
    <Paper elevation={3}  sx={{height: '10%' ,width: '100%', position: 'fixed', bottom: 0, left: 0, right: 0 }} color="primary" >
      <BottomNavigation  sx={{ backgroundColor: "#1F3A5C", height: '100%'  }} showLabels>
        <BottomNavigationAction label="Projects" icon={<AccountTreeRoundedIcon fontSize="large" />} />
        <BottomNavigationAction label="About Me" icon={<PersonSearchRoundedIcon fontSize="large" />} />
        <BottomNavigationAction label="Contact Me" icon={<ConnectWithoutContactRoundedIcon fontSize="large" />} />
      </BottomNavigation>
    </Paper>
  );
}
