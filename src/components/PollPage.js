
import user_1 from '../assets/user_1.png';
import { Button, Container, Typography } from '@mui/material';
function PollPage() {
    return ( 
        <Container sx={{textAlign:"center"}}>
            <Typography variant="h3" gutterBottom sx={{marginTop:5}}> Poll by sarah </Typography>
            <img src={user_1} width={"200px"} alt="user_1" />
            <Typography variant="h4" gutterBottom sx={{marginTop:5, marginBottom:5}}> Would you rather </Typography>

            <Container sx={{display:"flex", justifyContent:"space-around"}}>
                <Button variant="contained" fullWidth sx={{marginRight:2}}> Lorem fjdsaklfj dskfj dslkaf jdklsj fidsao </Button>
                <Typography variant="h5" gutterBottom> or </Typography>
                <Button variant="contained" fullWidth sx={{marginLeft:2}}> Option two </Button>
            </Container>
            
        </Container>
    );
}

export default PollPage;