import * as React from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import RegisterUser from './../forms/registerUser';


const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  bgcolor: 'background.paper',
  border: '2px solid #000',
  boxShadow: 24,
  p: 4,
};

const divStyle={
  overflowY: 'scroll',
  overflowX: 'hidden',
  height:'700px',
 
};

const EditModal = ({openModal, handleClose, children}) => {
    return ( 
<div >

<Modal
        open={openModal}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >

         <div style={divStyle}>
         <div style={{textAlign: 'Right'}}>

         <button className='btn btn-danger' onClick={handleClose}>x</button>
         </div>
       {children}
         </div>
      
         
      
        
      </Modal>

</div>
        
     );
}
 
export default EditModal;