import * as React from 'react';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';




export default function SummaryCard({budget, expenseTotal, handleChangeBudget}) {

  const card = (
    <React.Fragment>
      <CardContent>
       
        <Typography variant="h6" component="div">
          Budget : ${budget}
        </Typography>
        <Typography variant="h6" component="div">
          Expense : ${expenseTotal}
        </Typography>
      </CardContent>
      <CardActions>
        <Button onClick={handleChangeBudget} size="small">Change Budget</Button>
      </CardActions>
    </React.Fragment>
  );

  return (
    <Box sx={{ minWidth: 275 }}>
      <Card variant="outlined">{card}</Card>
    </Box>
  );
}