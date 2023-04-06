import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';

const ItemsOnCart = 0;

const CartWidget = () => (
    <>
        <AddShoppingCartIcon sx={{ display: { xs: 'none', md: 'flex'}, ml: '5%' }} fontSize='large'/>
        <p>{ItemsOnCart}</p>
    </>
)

export default CartWidget;