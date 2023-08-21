import { Typography, Container, TextField, Button } from "@mui/material";
import { useState } from "react";
import { connect } from "react-redux";
import { handleCreateNewQuestion } from "../actions/shared";
import { Navigate, useNavigate } from "react-router-dom";

function NewQuestionPage(props) {
    const { users, authedUser } = props;
    const [firstOption, setfirstOption] = useState("");
    const [secondOption, setsecondOption] = useState("");

    const navigete = useNavigate();
    
    const UploadQuestion = (e) => {
        e.preventDefault();
        props.dispatch(handleCreateNewQuestion(authedUser, firstOption, secondOption));
        setfirstOption("");
        setsecondOption("");
        navigete("/");
    }

    if (!authedUser) return <Navigate to="/403" />;
    else
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

const mapStateToProps = ({authedUser}) => {
    return {
        authedUser
    }
}

export default connect(mapStateToProps)(NewQuestionPage);