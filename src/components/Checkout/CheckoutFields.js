import TextField from '@mui/material/TextField';

const CheckoutFields = ({defaultValue, onChange}) => 
    <TextField
        required
        id="outlined-required"
        label="Required"
        defaultValue={defaultValue}
        onChange={onChange}
        sx={{ m: 1 }}
    />;

export default CheckoutFields;