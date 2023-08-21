import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

function QuestionCard(props) {

  const questionData = props.questions[props.question_id];
  const authorData = props.users[questionData.author];

  const convertTimestampToDate = (timestamp) => {
    const date = new Date(timestamp);
    return date.toLocaleDateString() + " - " + date.toLocaleTimeString();
  }
  
  return (
    <Card sx={{ minWidth: 220, margin:1, border:"2px solid green" }}>
      <CardContent>
        <Typography variant="h5" component="div">{authorData.name}</Typography>
        <Typography sx={{ mb: 1.5 }} color="text.secondary">
            {convertTimestampToDate(questionData.timestamp)}
        </Typography>
      </CardContent>
      <CardActions>
        <Link to={`questions/${props.question_id}`}>
          <Button variant="outlined" color="success">Details</Button>
        </Link>
      </CardActions>
    </Card>
  );
}


const mapStateToProps = ({authedUser, users, questions}, {question_id}) => {
    return {
        authedUser,
        users,
        questions,
        question_id,
    }
}
export default connect(mapStateToProps)(QuestionCard);