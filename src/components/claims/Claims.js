import React,{useState} from 'react'
import ClaimForm from './ClaimForm';
import ClaimTableContainer from './ClaimTableContainer';
import { Grid,Paper,Button} from '@mui/material';



function createData(id, amount, approver, status) {
  return { id, amount, approver, status };
}

const data = [
  createData('9XA001', 1345.00, 'Sayandeep_banerjee', 'Pending'),
  createData('9XA002', 3952.00, 'Shubham_01', 'Pending'),
  createData('9XA003',1541.00, 'Abhisek_lohani', 'Approved'),
  createData('9XA004', 2349.00, 'Omkar_v', 'Pending'),
  createData('9XA005', 345.00, 'Sayandeep_banerjee', 'Approved'),
];

function Claims() {
  
    const [showClaims, setShowClaims] = useState(false);
    const handleClick = () => {
    setShowClaims(!showClaims);
  };

  return (
    <>
    <Grid>
        <Paper elevation={10} style={{marginBottom:"10"}}>
      <Button onClick={() => handleClick()} variant="contained" style={{backgroundColor:"#8523ba",marginLeft:"45vw"}} >
       {showClaims ? <h6>Shows shaved Claim </h6>: <h6> Add new calims </h6>}
        </Button>
        </Paper>
    </Grid>
        {showClaims ? 
             <ClaimForm /> : 
             <ClaimTableContainer rows={data} />
        }
        
    </>
  )
}

export default Claims