import { NavLink } from 'react-router-dom';
import Button from '@mui/material/Button';
import HomeIcon from '@mui/icons-material/Home';

const HomeButton = () =>
  <Button
    color='inherit'
    variant="outlined"
    startIcon={<HomeIcon />}
    component={NavLink}
    to='/'
    size="large"
    sx={{margin: 5}}
    >
    De vuelta al Inicio
  </Button>;

export default HomeButton;