import { useState } from 'react';
import Box from '@mui/material/Box';
import ButtonGroup from '@mui/material/ButtonGroup';
import Button from '@mui/material/Button';
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';
import { Typography } from '@mui/material';

const ItemCount = ({stock, onAdd, itemAlreadyInCart}) => {
    const [productCounter, setproductCounter] = useState(0);
    const [stockAvailable, setstockAvailable] = useState(stock);
    const [itemAddedToCart, setItemAddedToCart] = useState(false);

    const productCounterColor = () => stockAvailable ? '' : '#7CB9E8';

    const handleAddToCart = () => {
        onAdd(productCounter);
        setItemAddedToCart(true);
    };

    const onAddition = () => {
        setproductCounter(productCounter+1);
        setstockAvailable(stockAvailable-1);
    };

    const onSubstraction = () => {
        setproductCounter(productCounter-1);
        setstockAvailable(stockAvailable+1);
    };

    return (
        <Box>
            <Box>
                <ButtonGroup>
                    <Button disabled={productCounter <= 0 || itemAlreadyInCart} onClick={onSubstraction}>-</Button>
                    <Button disabled style={{ display: "block"}}>
                        <Typography sx={{fontSize: 12}}>
                            Stock disponible:
                        </Typography>
                        <Typography sx={{fontSize: 12}}>
                        {stockAvailable}
                        </Typography>
                    </Button>
                    <Button disabled={productCounter >= stock || itemAlreadyInCart} onClick={onAddition}>+</Button>
                </ButtonGroup>
            </Box>
            <Box sx={{ mt: 2 }}>
                <Button
                    variant='outlined'
                    startIcon={<AddShoppingCartIcon />}
                    onClick={handleAddToCart}
                    disabled={productCounter === 0 || itemAddedToCart}
                >
                    Agregar al carrito
                    {itemAddedToCart ? null :<p style={{color: productCounterColor(), marginTop:-10}}>{productCounter}</p>}
                </Button>
            </Box>     
        </Box>


    );
};

export default ItemCount;