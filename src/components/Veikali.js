import * as React from "react"
import Typography from '@material-ui/core/Typography'
import Grid from '@material-ui/core/Grid'
import Link from '@material-ui/core/Link'
import Container from '@material-ui/core/Container'
import { styled } from '@mui/material/styles';
import Paper from '@mui/material/Paper';

  


const Item = styled(Paper) (({ theme }) =>  ({
    width: 800,
    visibility: 'hidden',
    transition: "transform 0.5s ease-in",
    "&:hover": { 
      transform: "scale3d(1.01, 1.05, 1) translate(50px) scale(1.1)",
      background: "#eef7e9",
      visibility: "visible",
      transition: "transform 0.5s ease-in-out",
    }
}));







export default function Veikali() {
  

  return (
    

<Container style={{minHeight: '70vh', display: 'flex', paddingTop: 40}}>
  <div >
      

    <Grid container 
    spacing={8}  
    style={{width:'80%'}}
    >
        <Grid container item xs={12} >
        <Item>

        
        <div>
        <Typography 
        style={{visibility: 'visible'}}
        variant="h4"
        >
          
          <Link style={{ textDecoration: 'none', color: "black" }} href="https://beziepakojuma.lv/" >
          Burka
          </Link>
          
          
        </Typography>
        </div>
        <div>
          <Typography
          
          >
            Krišjāņa Barona iela 59/61, Centra rajons, Rīga, LV-1001
          </Typography>
        </div>
        </Item>
        
        
        
            </Grid>

            <Grid container item xs={12} >
        <Item>
            <div>
            <Typography 
        style={{visibility: 'visible'}}
        variant="h4"
        >
          <Link style={{ textDecoration: 'none', color: "black" }} href="https://www.ieber.lv" >
          Ieber
          </Link>
            
          
          
        </Typography>
        </div>
        <div>
          <Typography
          
          >
           Interneta veikals <Link href="https://www.ieber.lv/" style={{color: "#8C4188"}}>https://www.ieber.lv/</Link>
          </Typography>
        </div>
        </Item>
        
        
            </Grid>
        
            <Grid container item xs={12} >
        <Item>
          <div>
            <Typography 
        style={{visibility: 'visible'}}
        variant="h4"
        >
          
          <Link style={{ textDecoration: 'none', color: "black" }} href="http://www.zezero.lv/" >
          ZeZero
          </Link>
          
          
        </Typography>
        </div>
        <div>
          <Typography
          
          >
            Interneta veikals <Link href="http://www.zezero.lv/" style={{color: "#8C4188"}} >https://www.zezero.lv/</Link>
          </Typography>
        </div>
        </Item>
            
        
        
        
        
            </Grid>
            

  

  <Grid container item xs={12} >
      <Item>  
  <div>
  <Typography 
        style={{visibility: 'visible'}}
        variant="h4"
        >
          
          <Link style={{ textDecoration: 'none', color: "black" }} href="https://zemes-draugs.business.site/" >
          Zemes Draugs
          </Link>
          
          
        </Typography>
        </div>
        <div>
          <Typography
          
          >
            Rīga, Nometņu iela 18 k-1,
          </Typography>
        </div>
        </Item>
        
        
            </Grid>


            
            <Grid container item xs={12} style={{width:'200%'}}>
        <Item>

        
            <div>
            <Typography 
        style={{visibility: 'visible'}}
        variant="h4"
        
        >
          
          <Link style={{ textDecoration: 'none', color: "black" }} href="https://www.micars.lv/" >
          Micars
          </Link>
          
          
        </Typography>
        </div>
        <div>
          <Typography
          
          >
            Rīga, Slokas iela 76b
          </Typography>
        </div>
        </Item>
        
        
            </Grid>
      </Grid>

      
    </div>
</Container>
    

    

    



  )
}