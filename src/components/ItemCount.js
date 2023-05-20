import { useState } from 'react';
import ButtonGroup from '@mui/material/ButtonGroup';
import Button from '@mui/material/Button';

const ItemCount = ({stock, onAdd, onSubstract}) => {
    const [productCounter, setproductCounter] = useState(0);

    const onAddition = () => {
        setproductCounter(productCounter+1);
        onAdd();
    };

    const onSubstraction = () => {
        setproductCounter(productCounter-1);
        onSubstract();
    };

    return (
        <ButtonGroup>
            <Button disabled={productCounter <= 0} onClick={onSubstraction}>-</Button>
            <Button disabled>{productCounter}</Button>
            <Button disabled={productCounter >= stock} onClick={onAddition}>+</Button>
        </ButtonGroup>
    );
};

export default ItemCount;