import { useEffect } from "react"
import { useNavigate } from "react-router-dom";
import Typography from '@mui/material/Typography';

const NotFound = () => {

    const redirect = useNavigate();

    useEffect(()=> {
        setTimeout(() => redirect('/'),3000)
    });

    return (
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
            No se encontro la pagina!, no te preocupes, seras redireccionado al inicio!
        </Typography>
    )
};

export default NotFound;