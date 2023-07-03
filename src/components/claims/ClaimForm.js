import React, { useState } from 'react';
import { TextField, Grid,Paper,Button,FormLabel} from '@mui/material';


const ClaimForm = () => {

  const stlz = {padding:20,marginBottom:10,marginLeft:200,width:"70vw"}
  
  const [formData, setFormData] = useState({
    amount: '',
    approver : '',
    recipt: '',
    type:'',
    description:'',
  });



  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevFormData) => ({
      ...prevFormData,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
    //post api call to submit the form data
    setFormData({
      amount: '',
      approver: '',
      recipt: '',
      type:'',
      description:'',
    });
    setSelectedFile(null)
  };

  const [selectedFile, setSelectedFile] = useState(null);

  const handleFileChange = (event) => {
   // const file = event.target.files[0];
   // setSelectedFile(file);
  };

  return (
    <Grid>
      {/* Header For the Form */}
        <Paper elevation={10} style={stlz} >
          <h4 style={{color:"#8523ba"}}>Add a New Claim :</h4>
          <form onSubmit={handleSubmit}>
        <TextField
          label="Claim Type"
          name="type"
          value={formData.type}
          onChange={handleChange}
          variant="outlined"
          margin="normal"
          required
          fullWidth
        />
        <TextField
          label="Approver ID"
          name="approver"
          value={formData.approver}
          onChange={handleChange}
          variant="outlined"
          margin="normal"
          required
          fullWidth
        />
        <TextField
          label="Amount"
          name="amount"
          value={formData.amount}
          onChange={handleChange}
          variant="outlined"
          margin="normal"
          required
          fullWidth
          
        />
        <TextField
          label="Description"
          name="description"S
          value={formData.description}
          onChange={handleChange}
          variant="outlined"
          margin="normal"
          required
          fullWidth
          
        />
        <FormLabel >Attach a Reciept *</FormLabel>
        <TextField
          name="selectedFile"
          value={selectedFile}
          onChange={handleFileChange}
          variant="outlined"
          margin="normal"
          required
          fullWidth
          type="file"
          accept=".pdf"
        />


        
        <Button type="submit" variant="contained" style={{backgroundColor:"#8523ba"}} >
          Submit
        </Button>
          </form>
        </Paper>
    </Grid>
  );
};

export default ClaimForm;