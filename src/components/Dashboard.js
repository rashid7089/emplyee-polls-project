import * as React from 'react';
import { Container, Typography, Box } from '@mui/material';
import QuestionCard from './QuestionCard';
// 1. for the user to see their own profile
// 2. each profile has 2 main sections: new questions and answered questions
// 3. each section has a list of questions displayed as cards elements
//      - each card element has the name of the user who asked the question
//      - each card element has the date & the time in the form of (4:11PM|11/23/2021) the question was asked
//      - each card element has a button to show the question details




// start building the ui

function Dashboard() {
    return ( 
        <Container>
            <Container sx={{ marginTop:4, paddingBottom:10, borderBottom:"2px solid black" }}>
                <Typography variant="h4" component="h1" gutterBottom> new questions </Typography>

                <Box
                sx={{
                  display: 'flex',
                  flexWrap: 'wrap',
                  bgcolor: 'background.paper',
                  maxWidth: "100%",
                  borderRadius: 1,
                }}
              >
              <QuestionCard />
              <QuestionCard />
              <QuestionCard />
              <QuestionCard />
              <QuestionCard />
              <QuestionCard />
              </Box>
            </Container>
            <Container sx={{ marginTop:4, paddingBottom:10, borderBottom:"2px solid black" }}>
                <Typography variant="h4" component="h1" gutterBottom> new questions </Typography>

                <Box
                sx={{
                  display: 'flex',
                  flexWrap: 'wrap',
                  bgcolor: 'background.paper',
                  maxWidth: "100%",
                  borderRadius: 1,
                }}
              >
              <QuestionCard />
              <QuestionCard />
              <QuestionCard />
              <QuestionCard />
              </Box>
            </Container>

        </Container>
     );
}

export default Dashboard;