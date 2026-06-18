'use client';
import { Box } from "@mui/material";
import * as React from "react";
import RoomAllocator from "./LeftCont/RoomAllocator";
import FloorPlanViewer from "./RightCont/FloorPlanViewer";
import type { SelectedRoomProps } from "@/hooks/mutation/use-room";
import type { AxiosResponse } from "axios";
import type { ProfileResponse } from "@/services/profile";

interface LowerCont1Props{
    selectedRooms: SelectedRoomProps[];
    floor: string;
    setSelectedRooms: React.Dispatch<React.SetStateAction<SelectedRoomProps[]>>;
    setFloor:(val:string)=>void;
    user: AxiosResponse<ProfileResponse>;

}

export default function LowerCont1({selectedRooms,floor,setSelectedRooms,user,setFloor}:LowerCont1Props):React.JSX.Element {

    const floors=["0","1","2","3","4","5"];

    return(
            
            <Box sx={{display:"flex",alignItems:"stretch",justifyContent:"center", minHeight:"60vh", mt:7}} gap="4%" width={1}>
                <Box width="48%">
                    <RoomAllocator selectedRooms={selectedRooms} floor={floor} setSelectedRooms={setSelectedRooms} user={user}/>    
                </Box>
                <Box width="48%">
                    <FloorPlanViewer floor={floor} floors={floors} setFloor={setFloor}/>
                </Box>
            </Box>


    )
}