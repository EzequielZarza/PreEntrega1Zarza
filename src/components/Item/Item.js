import { useNavigate } from 'react-router-dom';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { Button, CardActionArea, CardActions } from '@mui/material';
import CodervakTypography from '../CodervakUI/CodervakTypography'

const Item = ({ id, title, price }) => {
  const imagePath = `../images/${id}.png`;
  const navigate = useNavigate();
  const handleNavigation = () => navigate(`/item/${id}`);

  return (
    <Card raised sx={{margin: 2, borderRadius: 2}}>
      <CardActionArea>
        <CardMedia
          component='img'
          height='260'
          image={imagePath}
          alt={id}
          onClick={handleNavigation}
        />
        <CardContent>
          <CodervakTypography variant='body2' color='text.secondary'>
            {title}
          </CodervakTypography>
        </CardContent>
      </CardActionArea>
      <CardActions sx={{ display: 'flex', justifyContent: 'space-around' }}>
        <Button
            size='small'
            color='error'
            onClick={handleNavigation}
            sx={{mb: -3}}
        >
          Ver más
        </Button>
        <CodervakTypography variant='subtitle2' color='text.secondary' align='right'>
          {`US$${price}`}
        </CodervakTypography>
      </CardActions>
    </Card>
  );
};

export default Item;