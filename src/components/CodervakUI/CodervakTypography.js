import { Typography } from "@mui/material";

const CodervakTypography = ({variant, children, color, mt, align = 'center', component = ''}) => {
    const typographySX = {
        fontFamily: 'monospace',
        fontWeight: 700,
        letterSpacing: '.3rem',
        color: color ? color : 'inherit',
        textDecoration: 'none',
        mt: mt ? mt : '5%'
    };
    return <Typography component={component} variant={variant} align={align} noWrap sx={typographySX}>{children}</Typography>;
};

export default CodervakTypography;