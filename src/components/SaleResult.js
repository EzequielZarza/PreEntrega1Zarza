import { useState, useEffect, useContext } from 'react';
import { useNavigate } from 'react-router-dom';
// import dispatchOrder from '../../firebase/dispatchOrder';
import LoadingSpinner from './LoadingSpinner';
import { BuyerContext } from '../context/BuyerContext';
import { CartContext } from '../context/CartContext';
import { dispatchSale } from '../utils/utils';
// import Success from './Success';
// import FailedTransaction from './FailedTransaction';
import Typography from '@mui/material/Typography';
import Divider from '@mui/material/Divider';
import Box from '@mui/system/Box';
import Button from '@mui/material/Button';
import { Link } from 'react-router-dom';


const SaleResult = () => {
  const [orderId, setOrderId] = useState(null);
  const [error, setError] = useState(null);
  const { cartItems, itemsInCartAmmount, removeItemFromCart, totalPrice, clearCart} = useContext(CartContext);
  const { buyer, resetBuyer} = useContext(BuyerContext)
  const redirect = useNavigate();
  const salePrice = totalPrice();

  console.log('el buyer',buyer
  )


  useEffect(()=> {
    const finishSale = async () => {
      await dispatchSale({buyer, cartItems, salePrice, setOrderId, setError});
      clearCart();
      resetBuyer();
      //setTimeout(() => redirect('/'),3000)
    }
    finishSale()

  },[]);

  console.log('order', orderId)

  return orderId ? <>
  <Box
    display='flex'
    justifyContent='center'
    className='animate__animated animate__pulse'
  >
  </Box>
  <Typography variant='h5' align='center' gutterBottom>
    Muchas gracias por tu compra!
  </Typography>

  <Typography variant='subtitle1'>
    Tu código de compra es:{' '}
    <Typography variant='subtitle' color='primary'>
      {orderId}
    </Typography>
    . Enviamos un email a tu correo con los detalles de tu compra y
    estaremos en contacto con vos para seguir el estado de tu pedido.
  </Typography>

  <Button
    color='primary'
    component={Link}
    to='/'
    sx={{ mt: 3, mx: 'auto', display: 'block', textAlign: 'center' }}
  >
    Volver al inicio
  </Button>
</> : <>
      <Typography variant='h5' align='center' gutterBottom>
        Hubo un error en la transacción... Contacte con el administrador para
        más información.
      </Typography>

      <Divider
        sx={{
          my: { xs: 3, md: 6 },
          mx: { xs: 'auto', md: 0 },
        }}
        variant='middle'
      />

      <Typography variant='subtitle1' align='center' gutterBottom>
        {`Detalle del problema: ${error}`}
      </Typography>

    </>
};

export default SaleResult;
