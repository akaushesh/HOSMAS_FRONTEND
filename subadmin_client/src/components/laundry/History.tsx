'use client';

import { Button, IconButton, InputAdornment, Stack, TextField, Typography } from '@mui/material';
import * as React from 'react';
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import SearchIcon from '@mui/icons-material/Search';


interface HistoryProps {
  setPageState: (val: number) => void;
}

export default function History({ setPageState }: HistoryProps): React.JSX.Element {

	const [laundryNum, setLaundryNum] = React.useState<string>("");

  return (
    <Stack alignItems="center">
      <Button
        startIcon={<ArrowBackIosIcon />}
        sx={{ mt: 1, alignSelf: 'flex-start' }}
        onClick={() => {
          setPageState(0);
        }}
      >
        <Typography variant="body1" color="var(--mui-palette-text-primary)">
          back to main page
        </Typography>
      </Button>

	  <TextField
      label="Laundry No."
      value={laundryNum}
      onChange={(e) => {setLaundryNum(e.target.value);}}
      variant="standard"
      sx={{
        ml: 3,
		alignSelf:"flex-start",
        width: "80%",
        fontSize: "22px",
        mt: 3,
		"& .MuiInputBase-root:focus-within .MuiSvgIcon-root": {
          color: "var(--mui-palette-primary-main)",
        },
      }}
      InputProps={{
        endAdornment: (
          <InputAdornment position="end">
			<IconButton disabled={laundryNum===""} >
            	<SearchIcon sx={{ fontSize: "28px", mb: 0.2 }} />
			</IconButton>
          </InputAdornment>
        ),
      }}
    />
    </Stack>
  );
}
