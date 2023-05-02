import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import Card from '@mui/material/Card';
import CardMedia from '@mui/material/CardMedia';
import Divider from '@mui/material/Divider';
import Box from '@mui/material/Box';
import ItemCount from './ItemCount';

const ItemDetail = ({ id, title, description, price, stock }) => {
  const imagePath = `../images/${id}.png`;

  return (
    <>
      <Grid
        container
        mt={5}
        className='animate__animated animate__fadeIn'
        spacing={3}
      >
        <Grid
          item
          sm={6}
          md={4}
          className='animate__animated animate__fadeInLeft'
        >
          <Card raised>
            <CardMedia component='img' image={imagePath} alt={id} />
          </Card>
          <Box>
            <Typography component='h5' variant='h6' textAlign='center'>
              U${price}
            </Typography>
          </Box>
          <Box>
            <ItemCount stock={stock}/>
          </Box>
        </Grid>

        <Grid item xs={12} sm={6} md={8}>
          <Typography component='h3' textAlign='center' gutterBottom>
            {title}
          </Typography>
          <Divider />
          {description}
          <Divider sx={{ mb: 2 }} />
        </Grid>
      </Grid>
    </>
  );
};

export default ItemDetail;