//import getItem from '../API-mock/getProducts';
import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import Typography from '@mui/material/Typography';
import ItemDetails from './ItemDetails';
import getItem from '../API-mock/getItem';
import LoadingSpinner from './LoadingSpinner';

const ItemDetailContainer = () => {

    const [selectedItem, setSelectedItem] = useState(null);
    const { itemId } = useParams();

    useEffect(() => {
        const fetchItem = async () => {
            try {
                const result = await getItem(itemId).then(response => response);
                setSelectedItem(result);
            }catch(error){
                console.error(`fetchItem failed due to the following error: ${error}`);
            };
        };
        fetchItem();
    },[itemId]);

    return (
        selectedItem ?
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
                Especificaciones
            </Typography>
            <ItemDetails {...selectedItem} />
        </> : <LoadingSpinner/>
    )
}

export default ItemDetailContainer