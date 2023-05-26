import { useState, useEffect, useContext } from 'react';
import LoadingSpinner from './CodervakUI/LoadingSpinner';
import { BuyerContext } from '../context/BuyerContext';
import { CartContext } from '../context/CartContext';
import { dispatchPurchase } from '../utils/utils';

import CodervakTypography from './CodervakUI/CodervakTypography';
import Box from '@mui/system/Box';
import HomeButton from './CodervakUI/HomeButton';

const PurchaseResult = () => {
  const { cartItems, totalPrice, clearCart} = useContext(CartContext);
  const { buyer, resetBuyer} = useContext(BuyerContext)

  const [orderId, setOrderId] = useState(null);
  const [error, setError] = useState(null);
  const [buyerDetails, setBuyerDetails] = useState({})
  const [purchasePrice, setPurchasePrice] = useState(null)

  useEffect(()=>{
    setBuyerDetails(buyer);
    setPurchasePrice(totalPrice);
  },[]);

  useEffect(()=> {
    const finishPurchase = async () => {
      const price = totalPrice();
      await dispatchPurchase({buyer, cartItems, price, setOrderId, setError});
      clearCart();
      resetBuyer();
    }
    finishPurchase()
  },[]);

  return orderId ?
  <Box>
    <CodervakTypography variant="h5" noWrap align="center">
      Compra Realizada con Exito!
    </CodervakTypography>
    <CodervakTypography variant='subtitle1' noWrap align="center">
      Tu código de compra es:{' '}
      <CodervakTypography variant='subtitle' color='primary'>
        {orderId}
      </CodervakTypography>
    </CodervakTypography>
    <CodervakTypography noWrap  align="center">
       {`La compra fue realizada por: ${buyerDetails.name}, telefono ${buyerDetails.phone} y correo ${buyerDetails.email}`}
    </CodervakTypography>
    <CodervakTypography noWrap align="center">
       {`Por un total de: US$${purchasePrice}`}
    </CodervakTypography>
    <HomeButton/>

  </Box>
  : error ? 
    <Box>
      <CodervakTypography variant="h5" noWrap align="center">
      {'Hubo un problema con la compra! :('}
      </CodervakTypography>
      <CodervakTypography ariant='subtitle1' noWrap align="center">
        {`El detalle del problema es: ${error}`}
      </CodervakTypography>

    </Box> : <LoadingSpinner/>
};

export default PurchaseResult;
