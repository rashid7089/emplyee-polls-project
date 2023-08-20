import * as React from 'react';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';

const bull = (
  <Box
    component="span"
    sx={{ display: 'inline-block', mx: '2px', transform: 'scale(0.8)' }}
  >
    •
  </Box>
);

// make the button outlined

export default function BasicCard() {
  return (
    <Card sx={{ minWidth: 220, margin:1, border:"2px solid green" }}>
      <CardContent>
        <Typography variant="h5" component="div">sarahedo</Typography>
        <Typography sx={{ mb: 1.5 }} color="text.secondary">
            11/23/2021 - 4:11PM    
        </Typography>
      </CardContent>
      <CardActions>
        <Button variant="outlined" color="success">Details</Button>
      </CardActions>
    </Card>
  );
}
