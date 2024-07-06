import * as React from "react";
import { Box, Paper, Typography, Zoom } from "@mui/material";
import type { SelectedRoomProps } from "@/hooks/mutation/use-room";
import CancelIcon from '@mui/icons-material/Cancel';

interface SelectionTrayProps{
    selectedRooms:SelectedRoomProps[];
    setSelectedRooms: (val: SelectedRoomProps[]) => void;
    
}

export default function SelectionTray({selectedRooms,setSelectedRooms}:SelectionTrayProps):React.JSX.Element{
    const handleRemove = (index: number): void => {
        setSelectedRooms(selectedRooms.filter((ele, i) => i !== index));
    };
    
    return(
        <Paper
        elevation={10}
        sx={{
          display: 'flex',
          mt: 2,
          p: 1.5,
          alignItems: 'center',
          justifyContent: 'flex-start',
          gap: 2,
          background: 'var(--Tray-Color)',
          border: '1px dashed var(--Tray-BorderColor) ',
          overflowX:"auto",
          overflowY:"hidden",
          width: 1,
          whiteSpace:"nowrap"
        }}
      >

        {selectedRooms.length > 0 ? (
          selectedRooms.map((el, index) => (
            <Zoom key={el.room} in  style={{ transitionDelay: selectedRooms[index] ? '500ms' : '0ms' }}>
              
              <Paper
                sx={{
                  transition: 'ease-in-out 150ms',
                  display: 'inline-flex',
                  alignItems: 'center',
                  justifyContent: 'space-between',
                  gap: '5px',
                  position: 'relative',
                  background: 'var(--Tray-RoomColor)',
                  color: 'white',
                }}
              >
                
                <Box sx={{ pl: 1, py: '2px', width: 1 }}>
                  <Typography variant="body2" textAlign="right">
                    {el.room}
                  </Typography>
                </Box>



                <Box sx={{ cursor: 'pointer', pr: '4px', pt: '2px' }} onClick={() => {handleRemove(index);}}>
                  <CancelIcon fontSize="small" />
                </Box>
                
              </Paper>
            </Zoom>
          ))
        ) : (
          <Typography variant="body2" width={1} py="2px" textAlign="center">
            No rooms selected
          </Typography>
        )}


      </Paper>
    )
}