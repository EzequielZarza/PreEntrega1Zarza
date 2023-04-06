import { useState } from 'react';
import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';

const categories = ['Cars', 'Motorcycles', 'SUVs', 'Utilitaries'];

const CategoryList = () => {
    const [category, setCategory] = useState('');

    const handleSelectedCategory = event => {
        setCategory(event.target.value);
      };

    return (
        <Box sx={{minWidth: 180 }}>
            <FormControl fullWidth>
                <InputLabel id="Categories">Categories</InputLabel>
                    <Select
                    value={category}
                    label="Categories"
                    onChange={handleSelectedCategory}
                    >
                    {categories.map(category => (
                        <MenuItem
                            key={category}
                            onClick={handleSelectedCategory}
                            value={category}
                            >
                            {category}
                        </MenuItem>
                    ))}
                    </Select>
            </FormControl>
        </Box>
    )
}

export default CategoryList;