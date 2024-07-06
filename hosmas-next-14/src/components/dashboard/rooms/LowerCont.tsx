'use client';
import * as React from "react";
import { Box, Button, Stack, Typography } from "@mui/material";
import { useProfile } from "@/hooks/query/use-profile";
import type { AxiosResponse } from "axios";
import type { ProfileResponse } from "@/services/profile";
import RoomAllocator from "@/components/dashboard/rooms/LowerCont1/LeftCont/RoomAllocator";
import FloorPlanViewer from "@/components/dashboard/rooms/LowerCont1/FloorPlanViewer";
import type { SelectedRoomProps } from "@/hooks/mutation/use-room";
import { selectedRooms1 } from "@/components/dashboard/rooms/LowerCont1/LeftCont/roomstemp";

export default function LowerCont():React.JSX.Element {

    const [isNext,setIsNext]=React.useState()    

    return(
        <Stack
            sx={{
                '--Page-HeadColor': 'var(--mui-palette-text-secondaryChannel)',
                '--Tray-BorderColor': 'var(--mui-palette-secondary-main)',
                '--Tray-RoomColor': 'var(--mui-palette-primary-light)',
                '--Tray-Color': 'var(--mui-palette-secondary-light)',
                '--Room-color': 'var(--mui-palette-secondary-light)',
                '--Room-FontColor': 'var(--mui-palette-text-primary)',
                '--Room-ConnectorColor': 'var(--mui-palette-secondary-dark)',
                '--Room-Allotted': 'var(--mui-palette-success-main)',
                '--Room-Available': 'var(--mui-palette-primary-main)',
              }}
        >

            <Box sx={{display:'flex',alignItems:"center",justifyContent:"space-between"}}>
                <Box>
                    <Typography variant="h3" sx={{ color: 'var(--Page-HeadColor)', mb: 1 }} >{`Room Allocation - ${String(user?.data?.alloted_hostel)}`}</Typography>
                    <Typography >Team Leader can book rooms for the entire group.</Typography>
                </Box>
                <Box width="10%">
                    <Button fullWidth variant="contained" disabled={selectedRooms.length < user?.data?.group?.size}>NEXT</Button>
                </Box>
            </Box>

            
            <Box sx={{display:"flex",alignItems:"center",justifyContent:"center", mt:7}} gap={5} width={1}>
                <Box width="50%">
                    <RoomAllocator selectedRooms={selectedRooms} floor={floor} setSelectedRooms={setSelectedRooms} user={user}/>
                </Box>
                <Box width="50%">
                    <FloorPlanViewer setFloor={setFloor}/>
                </Box>
            </Box>


        </Stack>
    )
}