import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import Typography from '@mui/material/Typography';
import ItemList from './ItemList';
//import getProducts from '../API-mock/getProducts';
import { getProducts } from '../../utils/utils';
import LoadingSpinner from '../CodervakUI/LoadingSpinner';


const ItemListContainer = ({greetings}) => {

    const [products, setProducts] = useState([]);
    const [isLoading, setIsLoading] = useState(true);
    const { categoryId } = useParams();

    useEffect(() => {
        const fetchItemsByCategory = async () => {
            try {
                const result = await getProducts().then(response => response);
                const filteredResults = categoryId ? result.filter(product => product.category === categoryId) : result;
                setProducts(filteredResults);
                setIsLoading(false);
            } catch(error){
                console.error(`fetchIttemByCategoy failed due to the following error: ${error}`);
            };
        }
        fetchItemsByCategory();
    },[categoryId]);

    return (
        !isLoading ?
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
            {categoryId ? categoryId : greetings}
            </Typography>
            <ItemList items={products}/>
        </> : <LoadingSpinner/>
    );
};

export default ItemListContainer;