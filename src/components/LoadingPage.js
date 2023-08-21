import { Container, Typography } from "@mui/material";
import React from "react";

function LoadingPage() {
    return ( 
        <Container sx={{textAlign:"center"}}>
            <Typography variant="h3" gutterBottom sx={{marginTop:5}}> Loading... </Typography>
        </Container>
     );
}

export default LoadingPage;