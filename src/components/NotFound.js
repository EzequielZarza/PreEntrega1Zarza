import { useEffect } from "react"
import { useNavigate } from "react-router-dom";
import CodervakTypography from "./CodervakUI/CodervakTypography";

const NotFound = () => {

    const redirect = useNavigate();

    useEffect(()=> {
        setTimeout(() => redirect('/'),3000)
    });

    return (
        <CodervakTypography variant="h5">   
            No se encontro la pagina!, no te preocupes, seras redireccionado al inicio!
        </CodervakTypography>
    )
};

export default NotFound;