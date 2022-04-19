import React from 'react'
import {  makeStyles } from '@material-ui/core'




const useStyles = makeStyles ({
  paperContainer: {
    backgroundImage: 'url( /images/zero_waste_lv.png)',
    minHeight: '100vh',
    overflow: 'hidden',
    background: "center center/cover no-repeat",
}
})


export default function Home() {
  const classes = useStyles()
  
    

  return (
    
      <div  className={classes.paperContainer}>
        
      </div>
    );

    
  
  
}

