import { useState, useContext , useEffect} from 'react';
import { useNavigate } from 'react-router-dom';

import { BuyerContext } from '../context/BuyerContext';

import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Paper from '@mui/material/Paper';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import CodervakTypography from './CodervakTypography';


const steps = ['Dirección de envío', 'Detalles del pago', 'Chequeo de datos'];

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
    <>
      <Container
        component='main'
        maxWidth='sm'
      >
        <Paper
          sx={{ mt: { xs: 3, md: 6 }, p: { xs: 2, md: 3 } }}
          elevation={12}
        >
          <CodervakTypography variant="h5">
            Checkout
          </CodervakTypography>
            <Box sx={{ display: 'flex', justifyContent: 'flex-end', margin: 5 }}>
              <TextField
                required
                id="outlined-required"
                label="Required"
                defaultValue="Name"
                onChange={handleName}
              />
              <TextField
                required
                id="outlined-required"
                label="Required"
                defaultValue="Phone"
                onChange={handlePhone}
              />
              <TextField
                required
                id="outlined-required"
                label="Required"
                defaultValue="Email"
                onChange={handleEmail}
              />
              
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
    </>
  );
};

export default Checkout;