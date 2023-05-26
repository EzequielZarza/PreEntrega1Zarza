import { useState, useEffect } from 'react';
import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import { getCategories } from '../utils/utils';
import { NavLink } from 'react-router-dom';

const CategoryList = () => {

    const [categories, setCategories] = useState([]);
    const [selectedCategory, setSelectedCategory] = useState('');

    useEffect(() => {
        const fetchCategories = async () => {
            try {
                const result = await getCategories().then(response => response);
                setCategories(result)
            } catch(error){
                console.error(`fetchCategories failed due to the following error: ${error}`);
            };
        }
        fetchCategories();
    },[]);

    const handleSelectedCategory = event => {
        setSelectedCategory(event.target.value);
    };

    return (
        <Box sx={{minWidth: 180 }}>
            <FormControl fullWidth>
                <InputLabel id="Categories">{selectedCategory ? selectedCategory : 'Categories'}</InputLabel>
                <Select value={selectedCategory} label="Categories" onChange={handleSelectedCategory}>
                    {categories.map(category => (
                        <NavLink to={`/category/${category}`} style={{color: 'black'}}> 
                            <MenuItem key={category} value={category}>
                                {category}
                            </MenuItem>
                        </NavLink> 
                    ))}
                </Select>
            </FormControl>
        </Box>
    );
};

export default CategoryList;