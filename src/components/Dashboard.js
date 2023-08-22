import React, { useState } from 'react';
import { Container, Typography, Box, Select, MenuItem } from '@mui/material';
import QuestionCard from './QuestionCard';
import { connect } from 'react-redux';

function Dashboard(props) {
  const { questions } = props;
  const [displayedSection, setdisplayedSection] = useState("unanswered")

  const AnsweredQuestions = [];
  if (questions !== undefined && questions !== null && questions !== {}) {
    Object.keys(questions).forEach((question_id) => 
      {
        if (questions[question_id].optionOne.votes.includes(props.authedUser) || questions[question_id].optionTwo.votes.includes(props.authedUser)) {
          AnsweredQuestions.push(question_id);
        }
      }
    );
  }

    return ( 
        <Container>
            <Container sx={{display:"flex", alignItems:"center", marginTop:2, marginBottom:2}}>
                <Typography variant="h5" gutterBottom sx={{color:"green"}}> Displayed Section </Typography>
                <Select name='selectDisplaySection' variant="outlined" value={displayedSection} sx={{ my: 1, mx: 1.5 }}>
                  {["answered", "unanswered"].map((section) => (
                    <MenuItem
                      key={section}
                      value={section}
                      onClick={() => setdisplayedSection(section)}
                      sx={{fontWeight:800}}
                    >
                      {section}
                    </MenuItem>
                    ))}
                </Select>
            </Container>
            <Container sx={{ paddingBottom:5, paddingTop:5, borderBottom:"1px solid gray", borderTop:"1px solid gray" }}>
                <Typography variant="h4" component="h1" gutterBottom>{displayedSection}</Typography>

                <Box
                sx={{
                  display: 'flex',
                  flexWrap: 'wrap',
                  bgcolor: 'background.paper',
                  maxWidth: "100%",
                  borderRadius: 1,
                }}
              >
              {questions && Object.keys(questions)
                .filter(question_id => displayedSection === "unanswered" ? !AnsweredQuestions.includes(question_id):AnsweredQuestions.includes(question_id))
                .sort((a,b) => questions[b].timestamp - questions[a].timestamp)
                .map((question_id) => (
                <QuestionCard key={question_id + displayedSection + "_section"} question_id={question_id} />
              ))}

              </Box>
            </Container>
        </Container>
     );
}

const mapStateToProps = ({authedUser, users, questions}) => {
    return {
        authedUser,
        users,
        questions,
    }
}

export default connect(mapStateToProps)(Dashboard);