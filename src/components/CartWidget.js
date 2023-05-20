import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
const ItemsOnCart = 0;

const CartWidget = () => (
    <>
        <ShoppingCartIcon sx={{ display: { xs: 'none', md: 'flex'}, ml: '5%' }} fontSize='large'/>
        <p>{ItemsOnCart}</p>
    </>
)

export default CartWidget;