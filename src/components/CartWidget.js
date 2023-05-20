import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
const ItemsOnCart = 0;

const CartWidget = () => (
    <>
        <ShoppingCartIcon sx={{ display: { xs: 'none', md: 'flex'}, ml: '5%', fontSize: 50, color: 'white'}}/>
        <p>{ItemsOnCart}</p>
    </>
)

export default CartWidget;