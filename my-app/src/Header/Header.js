import * as React from 'react';
import { styled, alpha } from '@mui/material/styles';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import InputBase from '@mui/material/InputBase';
import MenuIcon from '@mui/icons-material/Menu';
import SearchIcon from '@mui/icons-material/Search';
import Button from '@mui/material/Button';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import './Header.css'
import Link from '@mui/material/Link';
import Logo from '../assets/images/bookmyshowback.png'
const Search = styled('div')(({ theme }) => ({
  position: 'relative',
  borderRadius: theme.shape.borderRadius,
  backgroundColor: alpha(theme.palette.common.white, 1),
  '&:hover': {
    backgroundColor: alpha(theme.palette.common.white,1),
  },
  color:'#000',
  marginLeft: 0,
  width: '100%',
  [theme.breakpoints.up('sm')]: {
    marginLeft: theme.spacing(1),
    width: 'auto',
  },
}));

const SearchIconWrapper = styled('div')(({ theme }) => ({
  padding: theme.spacing(0, 2),
  height: '100%',
  position: 'absolute',
  pointerEvents: 'none',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
}));

const StyledInputBase = styled(InputBase)(({ theme }) => ({
  color: 'inherit',
  '& .MuiInputBase-input': {
    padding: theme.spacing(1, 1, 1, 0),
    // vertical padding + font size from searchIcon
    paddingLeft: `calc(1em + ${theme.spacing(4)})`,
    transition: theme.transitions.create('width'),
    width: '100%',
    [theme.breakpoints.up('sm')]: {
      width: '50ch',
      '&:focus': {
        width: '20ch',
      },
    },
  },
}));

const Header = () => {
  
  return (
    <>
     <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static" style={{backgroundColor:"#808080"}}>
        <Toolbar>
          <img src={Logo} alt='logo' height={'50px'} width={'20%'}/>
          <Search>
            <SearchIconWrapper>
              <SearchIcon />
            </SearchIconWrapper>
            <StyledInputBase
              placeholder="Search for Movies,Events,Plays,Sports"
              inputProps={{ 'aria-label': 'search' }}
            />
          </Search>
          <Box sx={{ flexGrow: 1 }} />
          {"Chennai"}
          <ArrowDropDownIcon />
          <Button variant="contained" color="error" style={{textTransform:'none'}} sx={{mr:2,ml:2,pt:0,pb:0}}>Sign in</Button>

          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="open drawer"
            sx={{ mr: 2 }}
          >
            <MenuIcon />
          </IconButton>
        </Toolbar>
      </AppBar>
    </Box>
    <Box sx={{flexGrow:1, pt:1,pb:1}} style={{backgroundColor:'black',opacity:0.85}}>
      <div className='navigation-container'>
        <div>
          <Link href = "#" >Movies</Link>
          <Link href = "#" className='new'>Stream</Link>
          <Link href = "#" >Events</Link>
          <Link href = "#" >Plays</Link>
          <Link href = "#" >Sports</Link>
          <Link href = "#" >Activities</Link>
          <Link href = "#" >Buzz</Link>
        </div>
        <div>     
       <Link href = "#" className='new'>ListYourShow</Link>
        <Link href = "#" >Corporates</Link>
        <Link href = "#" >Offers</Link>
        <Link href = "#" >Gift Cards</Link>
        </div>

      </div>
    </Box>


    </>
  )
}

export default Header