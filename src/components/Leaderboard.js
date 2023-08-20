
import React from 'react';
import { styled } from '@mui/material/styles';
import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper, Typography, Container } from '@mui/material';
import { tableCellClasses } from '@mui/material/TableCell';

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
  
  function createData(name, calories, fat, carbs, protein) {
    return { name, calories, fat, carbs, protein };
  }

  const rows = [
    createData('Frozen yoghurt', 159, 6.0, 24, 4.0),
    createData('Ice cream sandwich', 237, 9.0, 37, 4.3),
    createData('Eclair', 262, 16.0, 24, 6.0),
    createData('Cupcake', 305, 3.7, 67, 4.3),
    createData('Gingerbread', 356, 16.0, 49, 3.9),
  ];

  
function Leaderboard() {
    return (
        <TableContainer component={Paper} sx={{padding:5}}>
          <Table sx={{ minWidth: 700 }} aria-label="customized table">
            <TableHead>
              <TableRow>
                <StyledTableCell>Users</StyledTableCell>
                <StyledTableCell >Answered</StyledTableCell>
                <StyledTableCell >Created</StyledTableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {rows.map((row) => (
                <StyledTableRow key={row.name}>
                  <StyledTableCell component="th" scope="row">
                    <Container sx={{display:"flex", alignItems:"center"}}>
                        <img src="https://www.w3schools.com/howto/img_avatar.png" width="50px" alt="user" />
                        <Container sx={{marginLeft:2}}>
                          <Typography>{row.name}</Typography>
                          <Typography variant="body2" gutterBottom sx={{color:"gray"}}> sarahsdfs </Typography>
                        </Container>
                    </Container>
                    
                  </StyledTableCell>
                  <StyledTableCell >
                    {row.calories}
                  </StyledTableCell>
                  <StyledTableCell >{row.fat}</StyledTableCell>
                </StyledTableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      );
}

export default Leaderboard;