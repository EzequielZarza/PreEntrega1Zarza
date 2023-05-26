import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import ItemDetails from './ItemDetails';
import { getItem } from '../../utils/utils';
import LoadingSpinner from '../CodervakUI/LoadingSpinner';
import CodervakTypography from '../CodervakUI/CodervakTypography';

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
            <CodervakTypography variant="h5">   
                Especificaciones
            </CodervakTypography>
            <ItemDetails {...selectedItem} />
        </> : <LoadingSpinner/>
    )
}

export default ItemDetailContainer