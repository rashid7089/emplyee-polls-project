import { Container, Typography } from "@mui/material";
import { Link } from "react-router-dom";

function Error404Page() {
    return ( 
        <Container sx={{textAlign:"center", padding:10}}>
            <Typography variant="h1" component="h1" gutterBottom> 404 </Typography>
            <Typography variant="h4" component="h1" gutterBottom> Page Not Found </Typography>
            <Link to="/"> Go to Home </Link>
        </Container>
     );
}

export default Error404Page;