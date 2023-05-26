import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import ItemList from './ItemList';
import { getProducts } from '../../utils/utils';
import LoadingSpinner from '../CodervakUI/LoadingSpinner';
import CodervakTypography from '../CodervakUI/CodervakTypography';

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
            <CodervakTypography variant="h5">   
                {categoryId ? categoryId : greetings}
            </CodervakTypography>
            <ItemList items={products}/>
        </> : <LoadingSpinner/>
    );
};

export default ItemListContainer;