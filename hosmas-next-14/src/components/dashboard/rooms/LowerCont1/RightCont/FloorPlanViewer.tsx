import * as React from 'react';
import { Box, Button, FormControl, InputLabel, MenuItem, Paper, Select, Typography, type SelectChangeEvent } from '@mui/material';
import BrokenImageIcon from '@mui/icons-material/BrokenImage';


interface FloorPlanProps {
  setFloor: (val: string) => void;
  floors: string[];
  floor: string;
}

export default function FloorPlanViewer({ floor, floors, setFloor }: FloorPlanProps): React.JSX.Element {
  
  const handleChange = (event: SelectChangeEvent): void => {
    setFloor(event.target.value);
  };

  const [floorPlan,setFloorPlan]=React.useState<string>("");

  return (
    <Paper sx={{ width: 1, p: 3, height: 1,position:"relative" }} elevation={10}>
      <Typography variant="h5"> Floor Plan </Typography>

      <FormControl fullWidth sx={{ mt: 4 }}>
        <InputLabel  id="floor-select-label">Select Level</InputLabel>
        <Select  labelId="floor-select-label" value={floor} label="Select Level" onChange={handleChange}>
          {floors.map((el) => {
            return (
              <MenuItem key={el} value={el}>
                {el}
              </MenuItem>
            );
          })}
        </Select>
      </FormControl>
    
       <Box sx={{display:"flex", alignItems:"center",justifyContent:"center", height:"37vh",my:2.5}}>
        

      {floorPlan === "" ? (
            <Box sx={{flexDirection:"column",alignItems:"center",display:"flex" ,color:"var(--Map-Icon)"}}>
            <BrokenImageIcon sx={{fontSize:90}} />
            <Typography>
                Map Not Found
            </Typography>
            </Box>
        ) : (
            <img src={floorPlan} alt="floor plan" />
        )}

        </Box>   


        <Box sx={{width:1,display:"flex",justifyContent:"center"}}>

            <Button sx={{width:"80%"}} variant='contained'>
                View 3D Model
            </Button>
        </Box>

    </Paper>
  );
}
