import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Container from '@mui/material/Container';
import CartWidget from './CartWidget'
import CategoryList from './CategoryList';

const Navbar = () => {

  return (
    <AppBar position="absolute" >
      <Container maxWidth="xl">
        <Toolbar disableGutters sx={{mt:'0.5%'}}>

          <CategoryList />

          <CartWidget/>

        </Toolbar>
      </Container>
    </AppBar>
  );
}


export default Navbar;