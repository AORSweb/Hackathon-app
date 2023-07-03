import React from 'react'
import {  Grid,Paper} from '@mui/material';
import ClaimTable from './ClaimTable'


function ClaimTableContainer({rows}) {
    const stlz = {padding:20,marginBottom:10,marginLeft:200,width:"70vw"}
    
  return (
    <Grid>
        <Paper elevation={10} style={stlz} >
             {/* Header for The Table */}
            <h4 style={{color:"#8523ba"}}>Claim Submited by You :</h4>
            {rows.lenght !== 0 ? <ClaimTable rows={rows}/>: <h4>You Do not have any pending Claims</h4>}
            </Paper>
    </Grid>
  )
}

export default ClaimTableContainer