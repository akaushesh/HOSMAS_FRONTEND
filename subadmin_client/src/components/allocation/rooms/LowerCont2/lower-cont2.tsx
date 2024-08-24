'use client';
import { Box } from "@mui/material";
import * as React from "react";
import type { SelectedRoomProps } from "@/hooks/mutation/use-room";
import type { AxiosResponse } from "axios";
import type { ProfileResponse } from "@/services/profile";
import DndMembers from "./LeftCont/DnDMembers";
import RoomViewer from "./RightCont/RoomViewer";

interface LowerCont2Props{
    selectedRooms: SelectedRoomProps[];
    user: AxiosResponse<ProfileResponse>;
}

export default function LowerCont2({selectedRooms,user}:LowerCont2Props):React.JSX.Element {


    return(
            
            <Box sx={{display:"flex",alignItems:"stretch",justifyContent:"center", minHeight:"60vh", mt:7}} gap="4%" width={1}>
                <Box width="48%">
                    <DndMembers selectedRooms={selectedRooms} user={user}/>
                </Box>
                <Box width="48%">
                    <RoomViewer selectedRooms={selectedRooms}/>
                </Box>
            </Box>


    )
}