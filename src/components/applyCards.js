import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Modal from '@mui/material/Modal';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Form from './applyForm';
const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 800,
  bgcolor: 'background.paper',
  border: '2px solid #000',
  boxShadow: 24,
  p: 4,
};

export default function ApplyCard() {
  const [open, setOpen] = React.useState(false);
  const [seeMoreOpen, setSeeMoreOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleSeeMore = () => setSeeMoreOpen(true);
  const handleClose = () => setOpen(false);
  const handleSeeMoreClose = () => setSeeMoreOpen(false);

  const seeMoreContent  = (<div>
    <p>Description :</p> 
    <p>Company :</p> 
    <p>Website :</p> 
    <p>Internship period :</p> 
    <p>Joining date :</p> 
    <p>Location :</p> 
    <Button size="small" onClick={handleOpen}  variant="contained" >Apply</Button>
  </div>)
  
  return (
    <Card sx={{ maxWidth: 400, minWidth: 200 }} style={{margin: '20px'}}>
      {/* <CardMedia
        component="img"
        alt="green iguana"
        height="140"
        image="/static/images/cards/contemplative-reptile.jpg"
      /> */}
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          Node.js Intern
        </Typography>
        <Typography variant="body2" color="text.secondary">
            Fresher backend Engineer-Nodejs+Python+SQL (Internship+Job Opportunity)
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small" onClick={handleSeeMore} >See More</Button>
        <Modal
          open={seeMoreOpen}
          onClose={handleSeeMoreClose}
          aria-labelledby="modal-modal-title"
          aria-describedby="modal-modal-description"
        >
           <Box sx={style}>
           <Typography id="modal-modal-title" variant="h6" component="h2">
              Internship Project Details
            </Typography>
           {seeMoreContent}
          </Box>

         
        </Modal>
        <Button size="small" onClick={handleOpen}>Apply</Button>
        <Modal
          open={open}
          onClose={handleClose}
          aria-labelledby="modal-modal-title"
          aria-describedby="modal-modal-description"
        >
          <Box sx={style}>
            <Typography id="modal-modal-title" variant="h6" component="h2">
              Fill below form
            </Typography>
            <Typography id="modal-modal-description" sx={{ mt: 2 }}>
              <Form/>
            </Typography>
          </Box>
        </Modal>
      </CardActions>
    </Card>
  );
}