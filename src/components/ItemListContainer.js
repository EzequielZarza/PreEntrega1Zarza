import Typography from '@mui/material/Typography';
import ItemCount from './ItemCount';

const ItemListContainer = ({greetings}) => 
    <>
        <Typography
        variant="h5"
        noWrap
        sx={{
        fontFamily: 'monospace',
        fontWeight: 700,
        letterSpacing: '.3rem',
        color: 'inherit',
        textDecoration: 'none',
        mt: '5%'
        }}
        align="center"
        >   
        {   greetings}
        </Typography>
        <ItemCount/>
    </>


export default ItemListContainer;