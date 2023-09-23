import * as React from 'react';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';




export default function SummaryCard({budget, expenseTotal, handleChangeBudget}) {

  const exp = +expenseTotal;

  const card = (
    <React.Fragment>
      <CardContent>
       
        <Typography variant="h6" component="div">
          Budget : ${budget}       <Button style={{marginleft:"20px"}} variant = 'outlined' onClick={handleChangeBudget} size="small">Change Budget</Button>
        </Typography>
        <Typography variant="h6" component="div">
          Expense : ${exp.toFixed(0)}
        </Typography>
        <Typography variant="h6" component="div">
          Balance : ${budget - expenseTotal}
        </Typography>
      </CardContent>
      
    </React.Fragment>
  );

  return (
    <Box sx={{ minWidth: 275 }}>
      <Card variant="outlined">{card}</Card>
    </Box>
  );
}