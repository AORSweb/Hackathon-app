import * as React from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import { Button } from '@mui/material';
import Snackbar from '@mui/material/Snackbar';
import MuiAlert from '@mui/material/Alert';


const Alert = React.forwardRef(function Alert(props, ref) {
    return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />;
  });
export default function Form() {
    const [open, setOpen] = React.useState(false);
    const handleClick = () => {
        setOpen(true);
      };
    
      const handleClose = (event, reason) => {
        if (reason === 'clickaway') {
          return;
        }
    
        setOpen(false);
      };
  return (
    <Box
      component="form"
      sx={{
        '& .MuiTextField-root': { m: 1, width: '25ch' },
      }}
      noValidate
      autoComplete="off"
    >
      <div>
        <TextField
          required
          id="standard-required"
          label="Full Name"
          variant="standard"
        />
        <TextField
          required
          id="standard-required"
          label="Education/Qualification"
          variant="standard"
        />
        <TextField
          required
          id="standard-required"
          label="Phone number"
          variant="standard"
        />
         <TextField
          required
          id="standard-required"
          label="Email id"
          variant="standard"
        />
        <TextField
          required
          id="standard-required"
          label="Skills"
          variant="standard"
        />
        <TextField
          id="standard-number"
          label="Year of experiance"
          type="number"
          InputLabelProps={{
            shrink: true,
          }}
          variant="standard"
        />
        <TextField
          id="standard-search"
          label="Location"
          type="search"
          variant="standard"
        />
        <TextField
          required
          id="standard-required"
          label="Date of birth"
          variant="standard"
        />
      </div>
      <Button style={{float: 'right'}}  variant="contained" onClick={handleClick}> Submit</Button>
      <Snackbar open={open} autoHideDuration={6000} onClose={handleClose}>
        <Alert onClose={handleClose} severity="success" sx={{ width: '100%' }}>
          Successfully applied to this Project / Internship!
        </Alert>
      </Snackbar>
    </Box>
  );
}