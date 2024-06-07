'use client';
import * as React from "react";
import { Box, Button, Stack, Typography } from "@mui/material";
import { useProfile } from "@/hooks/query/use-profile";
import type { AxiosResponse } from "axios";
import type { ProfileResponse } from "@/services/profile";
import RoomAllocator from "@/components/dashboard/rooms/RoomAllocator";
import FloorPlanViewer from "@/components/dashboard/rooms/FloorPlanViewer";

export default function Rooms():React.JSX.Element {

    const { data: profile } = useProfile();
    const user = profile as AxiosResponse<ProfileResponse>;

    const [select, setSelect] = React.useState<string[]>([]);


    return(
        <Stack
            sx={{
                '--Page-HeadColor': 'var(--mui-palette-text-secondaryChannel)',
                '--Tray-BorderColor': 'var(--mui-palette-secondary-main)',
                '--Tray-RoomColor': 'var(--mui-palette-primary-light)',
                '--Tray-Color': 'var(--mui-palette-secondary-light)',
                '--Room-color': 'var(--mui-palette-secondary-light)',
                '--Room-FontColor': 'var(--mui-palette-text-primary)',
                '--Room-ConnectorColor': 'var(--mui-palette-primary-main)',
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
                    <Button fullWidth variant="contained" disabled={select.length < user?.data?.group?.size}>NEXT</Button>
                </Box>
            </Box>

            
            <Box sx={{display:"flex",alignItems:"center",justifyContent:"center", mt:7}} gap={5}>
                <RoomAllocator select={select} setSelect={setSelect} user={user}/>
                <FloorPlanViewer/>
            </Box>


        </Stack>
    )
}