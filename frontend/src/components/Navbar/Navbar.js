import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import { useNavigate } from 'react-router-dom';
import { ReactComponent as Logo } from "../../assets/aqsha-logo.svg";
import { ReactComponent as Home } from "../../assets/icons/home.svg";
import { ReactComponent as Calendar } from "../../assets/icons/calendar.svg";
import { ReactComponent as Arrow } from "../../assets/icons/arrow.svg";
import { ReactComponent as Account } from "../../assets/icons/account.svg";

export default function Navbar() {

  const navigate = useNavigate()
  return (
    <AppBar position="static"  color='transparent' elevation={0}>
        <Toolbar>
            <IconButton anchor="left" onClick={()=>navigate('/home')}><Logo/></IconButton>
            <Box borderColor={`black`} sx={{ml: "auto"}}>
                <IconButton onClick={()=>navigate('/dashboard')}><Home/></IconButton>
                <IconButton onClick={()=>navigate('/calendar')}><Calendar/></IconButton>
                <IconButton onClick={()=>navigate('/analysis')}><Arrow/></IconButton>
                <IconButton onClick={()=>navigate('/profile')}><Account/></IconButton>
            </Box>
        </Toolbar>
    </AppBar>
  );
}
