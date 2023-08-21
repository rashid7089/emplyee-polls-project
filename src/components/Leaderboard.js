
import React from 'react';
import { styled } from '@mui/material/styles';
import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper, Typography, Container } from '@mui/material';
import { tableCellClasses } from '@mui/material/TableCell';
import { connect } from 'react-redux';
import getUserAvatar from '../functions/getUserAvatar';
import { Navigate } from 'react-router-dom';

const StyledTableCell = styled(TableCell)(({ theme }) => ({
    [`&.${tableCellClasses.head}`]: {
      backgroundColor: "#3f51b5",
      color: theme.palette.common.white,
    },
    [`&.${tableCellClasses.body}`]: {
      fontSize: 14,
    },
  }));
  
  const StyledTableRow = styled(TableRow)(({ theme }) => ({
    '&:nth-of-type(odd)': {
      backgroundColor: theme.palette.action.hover,
    },
    // hide last border
    '&:last-child td, &:last-child th': {
      border: 0,
    },
  }));
  
function Leaderboard(props) {
    const { users, authedUser } = props;
    
    console.log(users);
    if (!authedUser) return <Navigate to="/403" />
    else return (
        <TableContainer data-testid="leaderboard_container" component={Paper} sx={{padding:5}}>
          <Table sx={{ minWidth: 700 }} aria-label="customized table">
            <TableHead>
              <TableRow>
                <StyledTableCell>Users</StyledTableCell>
                <StyledTableCell >Answered</StyledTableCell>
                <StyledTableCell >Created</StyledTableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {users && Object.keys(users).sort((a,b) => {
                const a_score = Object.keys(users[a].answers).length + users[a].questions.length;
                const b_score = Object.keys(users[b].answers).length + users[b].questions.length;
                return b_score - a_score;
              }).map((user_id) => (
                <StyledTableRow key={user_id + "_row_in_leaderboard"}>
                  <StyledTableCell component="th" scope="row">
                    <Container sx={{display:"flex", alignItems:"center"}}>
                        <img src={getUserAvatar(users[user_id].avatarURL)} width={"50px"} alt="user avatar" />
                        <Container sx={{marginLeft:2}}>
                          <Typography>{users[user_id].name}</Typography>
                          <Typography variant="body2" gutterBottom sx={{color:"gray"}}> sarahsdfs </Typography>
                        </Container>
                    </Container>
                    
                  </StyledTableCell>
                  <StyledTableCell >{Object.keys(users[user_id].answers).length}</StyledTableCell>
                  <StyledTableCell >{users[user_id].questions.length}</StyledTableCell>
                </StyledTableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      );
}


const mapStateToProps = ({authedUser, users}) => {
    return {
        authedUser,
        users
    }
}
export default connect(mapStateToProps)(Leaderboard);