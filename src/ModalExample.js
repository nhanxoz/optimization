import React, { useState } from 'react';
import { Button, Dialog, DialogTitle, DialogContent, DialogContentText, DialogActions } from '@material-ui/core';
import TextField from "@material-ui/core/TextField";
import BasicTable from './BasicTable';
function ModalExample({b, H, d, c, onSolve, selectedButtons, res}) {
  const [open, setOpen] = useState(false);

  const handleClickOpen = () => {
    // console.log(H)
    onSolve();
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <div>
      <Button variant="outlined" color="primary" onClick={handleClickOpen}>
        Get Simplex Table
      </Button>
      <Dialog open={open} onClose={handleClose} aria-labelledby="form-dialog-title" maxWidth="100%">
        <DialogTitle id="form-dialog-title">Éc?</DialogTitle>
        <DialogContent>
          <DialogContentText>
            Result: 
          </DialogContentText>
          {/* <BasicTable b={b} H={H} c={c} d={d}/> */}
          <BasicTable b={b} H={H} c={c} d={d} selectedButtons={selectedButtons} res={res}/>
          
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose} color="primary">
            Cancel
          </Button>
          
        </DialogActions>
      </Dialog>
    </div>
  );
}

export default ModalExample;
