import { Container, Typography } from "@mui/material";
import { Link } from "react-router-dom";

function Error403Page() {
    return ( 
        <Container sx={{textAlign:"center", padding:10}}>
            <Typography variant="h1" component="h1" gutterBottom> 403 </Typography>
            <Typography variant="h4" component="h1" gutterBottom> You are not authrized to see this page </Typography>
            <Typography variant="h5" component="h1" sx={{color:"red"}} gutterBottom> please sign in first</Typography>
        </Container>
     );
}

export default Error403Page;