import { Typography } from "@mui/material";



const CodervakTypography = ({variant, children, color}) => {
    const typographySX = {
        fontFamily: 'monospace',
        fontWeight: 700,
        letterSpacing: '.3rem',
        color: color ? color : 'inherit',
        textDecoration: 'none',
        mt: '5%'
    };
    console.log(color)
    return  <Typography
    variant={variant}
    align="center"
    noWrap
    sx={typographySX}>
    {children}
  </Typography>

}


export default CodervakTypography;