import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Container from '@mui/material/Container';
import CartWidget from './CartWidget'
import CategoryList from './CategoryList';
import HomeIcon from '@mui/icons-material/Home';
import { NavLink } from 'react-router-dom';

const Navbar = () => {
  return (
    <AppBar position="absolute" >
      <Container maxWidth="xl">
        <Toolbar disableGutters sx={{mt:'0.5%'}}>

          <CategoryList />

          <CartWidget/>
          <div style={{marginLeft:'85%'}}>
          <NavLink to='/' >
            <HomeIcon sx={{ fontSize: 40, color: 'white'}} />          
          </NavLink>
          </div>
        </Toolbar>
      </Container>
    </AppBar>
  );
};

export default Navbar;