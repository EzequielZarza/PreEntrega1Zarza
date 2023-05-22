import { useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import { CartContext } from '../context/CartContext';
import { Button } from '@mui/material';

const CartWidget = () => {
    const { itemsInCartAmmount } = useContext(CartContext);
    const navigate = useNavigate();

    const handleCartIconClick = () => navigate(`/cart`);

    return (
    <>
        <Button>
            <ShoppingCartIcon
                sx={{ display: { xs: 'none', md: 'flex'}, ml: '5%', fontSize: 50, color: 'white'}}
                cursor='hand'
                onClick={handleCartIconClick}
            />       
        </Button>
        <p>{itemsInCartAmmount()}</p>
    </>  
    )
};

export default CartWidget;