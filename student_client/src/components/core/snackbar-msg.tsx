import * as React from 'react';
import { Alert, Snackbar } from '@mui/material';

interface PopupGalleryProps {
	setMsg: (value: SnackBarMsg) => void;
  msg:SnackBarMsg;
}

export interface SnackBarMsg{
  msg:string;
  type:"success"|"error"|"";
}

export default function SnackBarAlert({ setMsg,msg }:PopupGalleryProps): React.JSX.Element{

  const ResetSnackBar = (event?: React.SyntheticEvent | Event, reason?: string): void => {
    if (reason === 'clickaway') {
      return;
    }
    setMsg({
      msg: "",
      type: "",
    });
  };

  return (
    <Snackbar open={msg.msg!==""} autoHideDuration={2500} onClose={ResetSnackBar}
      anchorOrigin={{ vertical: 'top', horizontal: 'right' }}
      sx={{
        mt: 8,
      }}
      >
        <Alert onClose={ResetSnackBar} variant="filled" severity={msg.type==="error" ? 'error':'success'} >
          {msg.msg}
        </Alert>
      </Snackbar>
  );
};

