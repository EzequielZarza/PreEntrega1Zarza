import { useContext, Fragment, useState } from "react";
import Box from '@mui/material/Box';
import Divider from '@mui/material/Divider';
import Button from '@mui/material/Button';
import { Item } from '../Item/index'
import PaymentIcon from '@mui/icons-material/Payment';
import Grid from '@mui/material/Grid';
import { ButtonGroup } from "@mui/material";
import Checkout from "../Checkout/Checkout";
import HomeButton from "../CodervakUI/HomeButton";
import CodervakTypography from "../CodervakUI/CodervakTypography";
import { CartContext } from '../../context/CartContext';

const Cart = () => {
    const { cartItems, removeItemFromCart, totalPrice, clearCart} = useContext(CartContext);

    const [ showCheckoutForm, setShowCheckoutForm ] = useState(false)

    const handleClick = () => setShowCheckoutForm(true) 

    return (
        <Box >
            <CodervakTypography variant="h5">
                Mi carrito
            </CodervakTypography>
            <Divider variant='middle' sx={{ mt: 2 }} />
            {cartItems.length > 0 ? (
                <>
                    <Box display='flex' gap justifyContent={'center'}>
                        {cartItems.map(item => (
                        <Fragment key={item.id}>
                            <Grid spacing={2} py={3}>
                                <Item {...item} removeItemFromCart={removeItemFromCart}/>
                                <CodervakTypography variant='h3' color='text.secondary'>
                                    {item.amount}
                                </CodervakTypography>
                            </Grid>                   
                        </Fragment>
                        ))}
                    </Box>            
                    <CodervakTypography variant='h6' mt={-1}>
                        Precio Total: {'US$' + totalPrice()}
                    </CodervakTypography>
                    <Box display='flex' gap justifyContent={'center'} my >
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
                            onClick={handleClick}
                            startIcon={<PaymentIcon />}
                            sx={{margin: 5, marginLeft: 5}}
                            >
                            Proceder al pago
                            </Button>
                        </ButtonGroup>                           
                    </Box>
                    {showCheckoutForm ? <Checkout setShowCheckoutForm={setShowCheckoutForm}/> : null}
                </>) : (<>
                    <CodervakTypography variant="h5">
                        No Hay nada en el carrito! pero no se preocupe! vuelva al inicio para ver que onda
                    </CodervakTypography>
                    <HomeButton/>
                </>)}
        </Box>
    );
};
    
export default Cart;