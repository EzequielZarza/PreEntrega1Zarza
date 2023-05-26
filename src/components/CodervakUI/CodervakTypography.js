import { Typography } from "@mui/material";

const CodervakTypography = ({variant, children, color, mt}) => {
    const typographySX = {
        fontFamily: 'monospace',
        fontWeight: 700,
        letterSpacing: '.3rem',
        color: color ? color : 'inherit',
        textDecoration: 'none',
        mt: mt ? mt : '5%'
    };
    return <Typography variant={variant} align="center" noWrap sx={typographySX}>{children}</Typography>;
};

export default CodervakTypography;