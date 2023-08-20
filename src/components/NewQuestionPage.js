import { Typography, Container, Input, TextField, Button } from "@mui/material";
import { useState } from "react";
function NewQuestionPage() {

    const [firstOption, setfirstOption] = useState("");
    const [secondOption, setsecondOption] = useState("");
    
    const UploadQuestion = (e) => {
        e.preventDefault();
        console.log(firstOption, secondOption);

        setfirstOption("");
        setsecondOption("");
    }
    return ( 
        <Container sx={{textAlign:"center"}}>
            <Typography variant="h3" gutterBottom sx={{marginTop:5}}> Would You Rather </Typography>
            <Typography variant="h5" gutterBottom sx={{marginTop:5, marginBottom:5, color:"gray"}}> Create Your Own Poll </Typography>

            <form onSubmit={UploadQuestion}>
                <TextField 
                    id="outlined-basic" 
                    label="First Option" 
                    variant="outlined" 
                    fullWidth 
                    sx={{marginBottom:2}}
                    value={firstOption} 
                    onChange={(e) => setfirstOption(e.target.value)}
                 />
                <TextField 
                    id="outlined-basic" 
                    label="Second Option" 
                    variant="outlined" 
                    fullWidth 
                    sx={{marginBottom:2}}
                    value={secondOption}
                    onChange={(e) => setsecondOption(e.target.value)}
                 />
                <Button disabled={!firstOption && !secondOption} type="submit" variant="contained" fullWidth sx={{marginBottom:2}}> Upload The Question </Button>
            </form>
           
        </Container>
     );
}

export default NewQuestionPage;