import { useContext } from 'react';
import { NavLink } from 'react-router-dom';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import Card from '@mui/material/Card';
import CardMedia from '@mui/material/CardMedia';
import Divider from '@mui/material/Divider';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import ShoppingCartCheckoutIcon from '@mui/icons-material/ShoppingCartCheckout';
import ItemCount from './ItemCount';
import { CartContext } from '../context/cartContext';

const ItemDetail = ({ id, title, description, price, stock }) => {
  const { addItemToCart, removeItemFromCart } = useContext(CartContext);
  const imagePath = `../images/${id}.png`;

  const handleAddedItemToCart = amount => {
    addItemToCart({ id, title, description, price });
  };

  const handleSubstractedItemToCart = amount => {
    removeItemFromCart ({ id, title, description, price });
  };

  return (
    <>
      <Grid
        container
        mt={5}
        spacing={3}
      >
        <Grid
          item
          sm={6}
          md={4}
        >
          <Card raised sx={{margin: 2, borderRadius: 2}}>
            <CardMedia component='img' image={imagePath} alt={id} />
          </Card>
          <Box>
            <Typography component='h5' variant='h6' textAlign='center'>
              U${price}
            </Typography>
          </Box>
          <Box>
            <ItemCount stock={stock} onAdd={handleAddedItemToCart} onSubstract={handleSubstractedItemToCart}/>
          </Box>
          <Box sx={{ mt: 2 }} >
          <Button
            variant="outlined"
            startIcon={<ShoppingCartCheckoutIcon />}
            component={NavLink}
            to='/cart'
            >
              Finalizar compra
            </Button>
          </Box>
        </Grid>

        <Grid item xs={12} sm={6} md={7.8}>
          <Typography component='h3' textAlign='center' gutterBottom>
            {title}
          </Typography>
          <Divider />
          {description}
          <Divider sx={{ mb: 2 }} />
        </Grid>
      </Grid>
    </>
  );
};

export default ItemDetail;