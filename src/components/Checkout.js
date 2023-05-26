import { useState, useContext , useEffect} from 'react';
import { useNavigate } from 'react-router-dom';

import { BuyerContext } from '../context/BuyerContext';

import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Paper from '@mui/material/Paper';
import Button from '@mui/material/Button';
import CodervakTypography from './CodervakTypography';
import CheckoutFields from './CheckoutFields';

const Checkout = ({setShowCheckoutForm}) => {
  const { setBuyer } = useContext(BuyerContext);
  const redirect = useNavigate();

  const [ name, setName ] = useState(null);
  const [ phone, setPhone ] = useState(null);
  const [ email, setEmail ] = useState(null);
  const [ isCheckoutReady, setIsCheckoutReady ] = useState(false)

  useEffect(() => {
    name && phone && email ? setIsCheckoutReady(true) : setIsCheckoutReady(false)
  },[name, phone, email])


  const handleName = event => {
    console.log(event.target.value)
    setName(event.target.value);
  } 

  const handleEmail = event => {
    console.log(event.target.value)
    setEmail(event.target.value);
  } 

  const handlePhone = event => {
    console.log(event.target.value)
    setPhone(event.target.value);
  }

  const finishOrder = () => {
    const buyer = {name: name, phone: phone, email: email}
    setBuyer(buyer)
    redirect('/sale-result');
  }

  const handleCancel = () => setShowCheckoutForm(false)

  return (
    <Box display='flex' gap justifyContent={'center'} my mb={4} mt={-4} >
      <Container  component='main' maxWidth='sm'>
        <Paper sx={{ mt: { xs: 3, md: 6 }, p: { xs: 2, md: 3 } }} elevation={12}>
          <CodervakTypography variant="h5">
            Checkout
          </CodervakTypography>
            <Box sx={{ display: 'flex', justifyContent: 'flex-end', margin: 5 }}>
              <CheckoutFields defaultValue='Name' onChange={handleName}/>
              <CheckoutFields defaultValue="Phone" onChange={handlePhone}/>
              <CheckoutFields defaultValue="Email" onChange={handleEmail}/>              
            </Box>
            <Box >
            
              <Button 
                variant="outlined"
                color='secondary'
                sx={{margin: 5}}
                onClick={handleCancel}>
                Atras
              </Button>
              <Button
                variant="outlined"
                color='success'
                sx={{margin: 5}}
                disabled={!isCheckoutReady}
                onClick={finishOrder}
              >
                Finalizar!
              </Button>
            </Box>
        </Paper>
      </Container>
    </Box>
  );
};

export default Checkout;