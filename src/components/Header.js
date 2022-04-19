import * as React from 'react';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import Grid from '@material-ui/core/Grid'
import Paper from '@material-ui/core/Paper'
import Button from '@material-ui/core/Button'







export default function Header() {


  return (
    
    <Container>

    <Grid 
    container spacing={4}
    
    style={{paddingBottom: 10, paddingTop: 30}}
    >
      <Typography
      variant="h1"
    >
        <Button
      style={{fontSize: 40}}
      href="/Home"
      >
        ZERO WASTE
      </Button>
      
    </Typography>

    
    
    
    <Grid item xs={12} md={3}>
      <Paper style={{height: '100%', background: "#F8F8F8"}} >
    <Typography 
    align="center"
    >
      <Button
      style={{color: "#95AD6F","&:hover": { color: "#8C4188"},fontSize: 40, paddingTop: 17}}
      href="/Veikali"
      >
        veikali
      </Button>
      
    </Typography>

    <Typography 
      
      align="center"
      gutterBottom
    >
      Bezatkritumu veikali Rīgā.
    </Typography>
    </Paper>
    </Grid>
    
    
      
    <Grid item xs={12} md={3} >
      <Paper style={{height: '100%', background: "#F8F8F8"}}>
    <Typography 
      align="center"
    >
      <Button
      style={{color: "#95AD6F","&:hover": { color: "#8C4188",  },fontSize: 40, paddingTop: 17}}
      href="/Razotaji"
      
      >
        ražotāji
      </Button>
      
    </Typography>

    <Typography 
      align="center"
      gutterBottom
    >
    Populārākie bezatkritumu produktu ražotāji
    </Typography>
    </Paper>
    </Grid>
    
    <Grid item xs={12} md={3} >
      <Paper style={{height: '100%', background: "#F8F8F8"}}>
    <Typography
      align="center"
    >
      <Button
      style={{color: "#95AD6F","&:hover": { color: "#8C4188",  },fontSize: 40, paddingTop: 17}}
      href="/Produkti"
      
      >
        produkti
      </Button>
      
    </Typography>

    <Typography 
      align="center"
      gutterBottom
    >
     Populārākie produkti bezatkritumu veikalos.
    </Typography>
    </Paper>
    </Grid>

    </Grid>


      
      
    
     
    </Container>


  );
}