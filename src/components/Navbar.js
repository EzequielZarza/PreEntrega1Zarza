import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Container from '@mui/material/Container';
import CartWidget from './CartWidget'
import CategoryList from './CategoryList';
import HomeIcon from '@mui/icons-material/Home';
import { NavLink } from 'react-router-dom';
import Box from '@mui/material/Box';

const Navbar = () => {
  return (
    <AppBar position="absolute" >
      <Container maxWidth="xl">
        <Toolbar disableGutters sx={{mt:'0.5%'}}>

          <CategoryList />
          <Box sx={{marginLeft:'85%', display: 'inline-flex'}}>
            <CartWidget/>
            <NavLink to='/'  >
              <HomeIcon sx={{ fontSize: 50, color: 'white',  marginLeft: 5}} />          
            </NavLink>
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
};

export default Navbar;