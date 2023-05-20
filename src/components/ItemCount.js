import { useState } from 'react';
import ButtonGroup from '@mui/material/ButtonGroup';
import Button from '@mui/material/Button';

const ItemCount = ({stock}) => {
    const [productCounter, setproductCounter] = useState(0);
    const onAdd = () => setproductCounter(productCounter+1);
    const onSubstract = () => setproductCounter(productCounter-1);

    return (
        <ButtonGroup>
            <Button disabled={productCounter <= 0} onClick={onSubstract}>-</Button>
            <Button disabled>{productCounter}</Button>
            <Button disabled={productCounter >= stock} onClick={onAdd}>+</Button>
        </ButtonGroup>
    );
};

export default ItemCount;