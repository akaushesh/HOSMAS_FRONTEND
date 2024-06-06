import * as React from 'react';
import RadioButtonCheckedIcon from '@mui/icons-material/RadioButtonChecked';
import RadioButtonUncheckedIcon from '@mui/icons-material/RadioButtonUnchecked';
import { Box, Button, Paper, Typography } from '@mui/material';

interface CheckProps {
  title: string;
  disabled: boolean;
  IsSelect: boolean;
  setSelect: (IsSelect: boolean) => void;
}

export default function CheckboxSelect({ title, IsSelect, disabled, setSelect }: CheckProps): React.JSX.Element {
  function handleClick(): void {
    setSelect(!IsSelect);
  }

  return (
    <Paper elevation={10} >
      <Button
        variant={IsSelect ?'contained':"text"}
        sx={{transition:"ease-in-out 150ms",width:"100%",display:"flex",justifyContent:"flex-start",alignItems:"center",px:"10px",py:1,gap:"10px"}}
        onClick={() => {
          handleClick();
        }}
        disabled={disabled}
      >
        <Box sx={{display:"flex",alignItems:"center",justifyContent:"center",fontSize:{md:20,xs:12}}}>
          {IsSelect ? <RadioButtonCheckedIcon /> : <RadioButtonUncheckedIcon />}
        </Box>
        <Typography variant="h6" sx={{fontSize:{md:18,xs:14}}}>{title}</Typography>
      </Button>
    </Paper>
  );
}
