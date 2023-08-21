import * as React from 'react';
import { Container, Typography, Box } from '@mui/material';
import QuestionCard from './QuestionCard';
import { connect } from 'react-redux';

function Dashboard(props) {
  const { questions } = props;

  const AnsweredQuestions = [];
  if (questions) {
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
            <Container sx={{ marginTop:4, paddingBottom:10, borderBottom:"2px solid black" }}>
                <Typography variant="h4" component="h1" gutterBottom> New Questions </Typography>

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
                .filter(question_id => !AnsweredQuestions.includes(question_id))
                .sort((a,b) => questions[b].timestamp - questions[a].timestamp)
                .map((question_id) => (
                <QuestionCard key={question_id + "newQuestion_section"} question_id={question_id} />
              ))}

              </Box>
            </Container>
            <Container sx={{ marginTop:4, paddingBottom:10, borderBottom:"2px solid black" }}>
                <Typography variant="h4" component="h1" gutterBottom> Done </Typography>

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
                .filter(question_id => AnsweredQuestions.includes(question_id))
                .sort((a,b) => questions[b].timestamp - questions[a].timestamp)
                .map((question_id) => (
                <QuestionCard key={question_id + "done_section"} question_id={question_id} />
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