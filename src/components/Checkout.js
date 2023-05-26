import { useState, useContext , useEffect} from 'react';
import { useNavigate } from 'react-router-dom';

import { CartContext } from '../context/CartContext';
import { BuyerContext } from '../context/BuyerContext';

import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Paper from '@mui/material/Paper';
import Stepper from '@mui/material/Stepper';
import Step from '@mui/material/Step';
import StepLabel from '@mui/material/StepLabel';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import TextField from '@mui/material/TextField';
import { dispatchSale } from '../utils/utils';


const steps = ['Dirección de envío', 'Detalles del pago', 'Chequeo de datos'];

const Checkout = ({setShowCheckoutForm}) => {
  const { cartItems, itemsInCartAmmount, removeItemFromCart, totalPrice, clearCart} = useContext(CartContext);
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
    const salePrice = totalPrice();
    //return {buyer, cartItems, salePrice}
    //setBuyer({ name, phone, email });
    setBuyer({name: 'testname', phone: 'testphone', email: 'testEmail'})
    // dispatchSale({buyer, cartItems, salePrice});
    redirect('/sale-result');
  }


  const [activeStep, setActiveStep] = useState(0);


  const handleCancel = () => setShowCheckoutForm(false)

  // if (amountOfItemsInCart() === 0 && activeStep !== steps.length) {
  //   return <Navigate to='/' />;
  // }

  // const handleNext = () => {
  //   const formIsValid =
  //     activeStep === 0
  //       ? validateAddressForm(userData, setErrors)
  //       : validatePaymentForm(userData, setErrors);

  //   if (formIsValid) setActiveStep(activeStep + 1);
  // };

  // const handleBack = () => {
  //   setErrors({});
  //   setActiveStep(activeStep - 1);
  // };

  return (
    <>
      <Container
        component='main'
        maxWidth='sm'
        className='animate__animated animate__fadeIn'
      >
        <Paper
          sx={{ mt: { xs: 3, md: 6 }, p: { xs: 2, md: 3 } }}
          elevation={12}
        >
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
            Checkout
          </Typography>

          <>
            {activeStep === steps.length ? (<div>Hola</div>
              // <DispatchCheckout
              //   userData={userData}
              //   resetUserData={resetUserData}
              //   cart={cart}
              //   resetCart={resetCart}
              //   totalCartPrice={totalCartPrice}
              // />
            ) : (
              <>
                {/* {getStepContent(activeStep)} */}
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
                    {/* {activeStep === steps.length - 1
                      ? 'Terminar mi compra'
                      : 'Siguiente'} */}

                    
                  </Button>
                </Box>
              </>
            )}
          </>
        </Paper>
      </Container>
    </>
  );
};

export default Checkout;