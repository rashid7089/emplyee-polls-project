
import React, { useEffect, useState } from 'react';
import { connect } from 'react-redux';
import { Button, Container, Typography } from '@mui/material';
import { Navigate, useParams } from "react-router-dom";
import { handleSaveQuestionAnswer } from '../actions/shared';
import formatOptions from '../functions/formatOptions';
import { handleSetUserAnswer, setUserAnswer } from '../actions/users';
import getUserAvatar from '../functions/getUserAvatar';
import Footer from './Footer';
import Error403Page from './Error403Page';

function PollPage(props) {
    let { question_id } = useParams();
    const { questions, users, authedUser, loadingBar } = props;

    const [questionData, setquestionData] = useState({});
    const [authorData, setauthorData] = useState({});
    const [userAnswer, setuserAnswer] = useState(formatOptions(0));

    const [firstOptionVotes, setFirstOptionVotes] = useState(0)
    const [secondOptionVotes, setSecondOptionVotes] = useState(0)

    useEffect(() => {
        if (questions[question_id] != undefined) {
            setquestionData(questions[question_id]);
            setFirstOptionVotes(questions[question_id].optionOne.votes.length);
            setSecondOptionVotes(questions[question_id].optionTwo.votes.length);
            
            if (questions[question_id]) {
                setauthorData(users[questions[question_id].author]);

                // check if the user answered the question
                if (users[authedUser] && users[authedUser].answers[question_id]) {
                    const user_answer = users[authedUser].answers[question_id];
                    console.log(authedUser, user_answer)
                    // get user answer from question data
                    let user_answer_in_question_data = "";
                    if (questions[question_id].optionOne.votes.includes(authedUser)) user_answer_in_question_data = "optionOne";
                    else if (questions[question_id].optionTwo.votes.includes(authedUser)) user_answer_in_question_data = "optionTwo";

                    // check if the question have the same answer as the user
                    if (user_answer_in_question_data !== user_answer) {
                        // change the user answer to answer in question data
                        props.dispatch(handleSetUserAnswer(question_id, user_answer_in_question_data));
                    } else {
                        setuserAnswer(user_answer);
                    }
                }
                else {
                    setuserAnswer("");
                }
            }
        }
    }, [questions, authedUser, question_id, users]);
    
    const submitAnswer = (answer) => {
        props.dispatch(handleSaveQuestionAnswer(authedUser, question_id, answer));
        setuserAnswer(answer);
    }

    if (!authedUser) return <Error403Page />
    else if (questions && Object.keys(questions).length > 0 && !Object.keys(questions).includes(question_id)) return <Navigate to="/404" replace />;
    else return ( 
        <Container sx={{textAlign:"center"}}>
            <Typography variant="h3" gutterBottom sx={{marginTop:5}}> Poll by {authorData.name} </Typography>
            <img src={getUserAvatar(authorData && authorData.avatarURL)} width={"200px"} alt="user avatar" />
            <Typography variant="h4" gutterBottom sx={{marginTop:5, marginBottom:5}}> Would you rather </Typography>

            <Container sx={{display:"flex", justifyContent:"space-around"}}>

                {/* first choice */}
                <Container sx={{display:"flex", flexDirection:"column", alignItems:"center"}}>
                    <Button 
                    variant="contained" 
                    fullWidth 
                    sx={{marginRight:2, backgroundColor:(userAnswer === formatOptions(1) && "green!important"), color:(userAnswer === formatOptions(1) && "white!important")}}
                    onClick={() => submitAnswer(formatOptions(1))}
                    disabled={userAnswer !== ""}
                    > {questionData.optionOne && questionData.optionOne.text}</Button>
                    <Typography sx={{color:"gray"}} variant="p" gutterBottom>{`${firstOptionVotes} people vote for this choice (${Math.floor(firstOptionVotes/Math.max(secondOptionVotes+firstOptionVotes, 1)*100)}% of total votes)`}</Typography>
                </Container>

                <Typography variant="h5" gutterBottom> or </Typography>

                {/* second choice */}
                <Container sx={{display:"flex", flexDirection:"column", alignItems:"center"}}>
                    <Button 
                    variant="contained" 
                    fullWidth 
                    sx={{marginLeft:2, backgroundColor:(userAnswer === formatOptions(2) && "green!important"), color:(userAnswer === formatOptions(2) && "white!important")}} 
                    onClick={() => submitAnswer(formatOptions(2))}
                    disabled={userAnswer !== ""}
                    >{questionData.optionTwo && questionData.optionTwo.text}</Button>
                    <Typography sx={{color:"gray"}} variant="p" gutterBottom>{`${secondOptionVotes} people vote for this choice (${Math.floor(secondOptionVotes/Math.max(secondOptionVotes+firstOptionVotes, 1)*100)}% of total votes)`}</Typography>
                </Container>

            </Container>
            <Footer />
        </Container>
    );
}

const mapStateToProps = ({authedUser, users, questions, loadingBar}) => {
    return {
        authedUser,
        users,
        questions,
        loadingBar
    }
}

export default connect(mapStateToProps)(PollPage);