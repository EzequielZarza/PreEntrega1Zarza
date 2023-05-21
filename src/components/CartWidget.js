import { useContext } from 'react';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import { CartContext } from '../context/cartContext';

const CartWidget = () => {
    const { itemsInCartAmmount } = useContext(CartContext);
    return (
    <>
        <ShoppingCartIcon sx={{ display: { xs: 'none', md: 'flex'}, ml: '5%', fontSize: 50, color: 'white'}}/>
        <p>{itemsInCartAmmount()}</p>
    </>
    )
};

export default CartWidget;