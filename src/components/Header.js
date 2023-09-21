import React from 'react'
import {
    AppBar,
    Toolbar,
    CssBaseline,
    Typography,
    Button 
  } from "@mui/material";
  import LogoutIcon from '@mui/icons-material/Logout';


  const styles = {
    navlinks: {
      marginLeft: "10px",
      display: "flex",
    },
   logo: {
      flexGrow: "1",
      cursor: "pointer",
    },
    link: {
      textDecoration: "none",
      color: "white",
      fontSize: "14px",
      marginLeft: "14px",
      "&:hover": {
        color: "yellow",
        borderBottom: "1px solid white",
      },
    },
  }

function Header({signOut, showAddExpense}) {
  return (
    <AppBar position="static">
      <CssBaseline />
      <Toolbar>
        <Typography variant="h6" style={styles.logo} >
        Hello {/* Hello {user.username} */}
        </Typography>
       
        <div style={styles.navlinks}>
        <p style={styles.link} onClick={showAddExpense}> Add Expense  </p>
        <p style={styles.link}> Reset Expense  </p>
      
       <Button onClick={signOut} style={styles.link} variant="outlined" endIcon={<LogoutIcon />}>
  SignOut
</Button>
     

          </div>
      </Toolbar>
    </AppBar>

  
  )
}

export default Header