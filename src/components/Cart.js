import { useContext, Fragment } from "react";
import { CartContext } from '../context/CartContext';
import { NavLink } from 'react-router-dom';
import Box from '@mui/material/Box';
import Divider from '@mui/material/Divider';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import Item from './Item'
import HomeIcon from '@mui/icons-material/Home';

import PaymentIcon from '@mui/icons-material/Payment';
import Grid from '@mui/material/Grid';
import { ButtonGroup } from "@mui/material";


const Cart = () => {
    const { cartItems, itemsInCartAmmount, removeItemFromCart, totalPrice, clearCart} = useContext(CartContext);
    console.log(cartItems)
    return (
        <Box >
            <Typography variant="h5"
                noWrap
                sx={{
                fontFamily: 'monospace',
                fontWeight: 700,
                letterSpacing: '.3rem',
                color: 'inherit',
                textDecoration: 'none',
                mt: '5%'
                }}
                align="center">
                Mi carrito
            </Typography>
            <Divider variant='middle' sx={{ mt: 2 }} />
                {cartItems.length > 0 ? (
                    <>
                    <Box display='flex' gap justifyContent={'center'}>
                        {cartItems.map(item => (
                        <Fragment key={item.id}>
                            <Grid spacing={2} py={3}>
                                <Item {...item} removeItemFromCart={removeItemFromCart}/>
                                <Typography
                                variant='h3'
                                color='text.secondary'
                                noWrap
                                sx={{
                                    fontFamily: 'monospace',
                                    fontWeight: 700,
                                    textDecoration: 'none',
                                    margin: 2
                                    }}
                                >
                                    {item.amount}
                                </Typography>
                            </Grid>                   
                        </Fragment>
                        ))}
                    </Box>
            
                    <Typography
                        variant='h6'
                        noWrap
                        sx={{
                        fontFamily: 'monospace',
                        fontWeight: 700,
                        letterSpacing: '.3rem',
                        color: 'inherit',
                        textDecoration: 'none',
                        }}
                        align="center"
                    >
                        Precio Total: {'US$' + totalPrice()}
                    </Typography>
            
                    <Box display='flex' gap justifyContent={'center'} my mt={4}>
                        <ButtonGroup>
                            <Button
                                variant="outlined"
                                color='secondary'
                                onClick={clearCart}
                                sx={{margin: 5}}
                            >
                                Vaciar Carrito
                            </Button>
                            <Button
                            variant='outlined'
                            color='success'
                            component={NavLink}
                            to='/checkout'
                            startIcon={<PaymentIcon />}
                            sx={{margin: 5}}
                            >
                            Proceder al pago
                            </Button>
                        </ButtonGroup>
                        
                    </Box>
                    </>) : (<>
                        <Typography
                            variant="h5"
                            noWrap
                            sx={{
                            fontFamily: 'monospace',
                            fontWeight: 700,
                            letterSpacing: '.3rem',
                            color: 'inherit',
                            textDecoration: 'none',
                            mt: '5%'
                            }}
                            align="center"
                            >
                            No Hay nada en el carrito! pero no se preocupe! vuelva al inicio para ver que onda
                        </Typography>
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
                        </Button>
                    </>)}
        </Box>
      );
};
    
export default Cart;