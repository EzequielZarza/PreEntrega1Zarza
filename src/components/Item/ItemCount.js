import { useState } from 'react';
import Box from '@mui/material/Box';
import ButtonGroup from '@mui/material/ButtonGroup';
import Button from '@mui/material/Button';
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';

const ItemCount = ({stock, onAdd, onSubstract, itemAlreadyInCart}) => {
    const [productCounter, setproductCounter] = useState(0);
    const [stockAvailable, setstockAvailable] = useState(stock);
    const [itemAddedToCart, setItemAddedToCart] = useState(false);

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
        //onSubstract();
    };

    return (
        <Box>
        <Box>
            <ButtonGroup>
                <Button disabled={productCounter <= 0 || itemAlreadyInCart} onClick={onSubstraction}>-</Button>
                <Button disabled>{stockAvailable}</Button>
                <Button disabled={productCounter >= stock || itemAlreadyInCart} onClick={onAddition}>+</Button>
            </ButtonGroup>
        </Box>
        <Box sx={{ mt: 2 }}>
            <Button
                variant='outlined'
                startIcon={<AddShoppingCartIcon />}
                onClick={handleAddToCart}
                // disabled={stock < 1 || (counter < 1 && true)}
                disabled={productCounter === 0 || itemAddedToCart}
            >
                Agregar al carrito
            </Button>
        </Box> 
            
        </Box>


    );
};

export default ItemCount;